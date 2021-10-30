class Api::V1::ProductsController < ApplicationController
  def index
    @products = Product.all.with_attached_images
    render json: @products.map {|product| product.as_json.merge({product_images: product.images.map {|img| url_for(img)} })}
  end

  def show
    @product = Product.find(params[:id])
    @category = Category.find(@product.category_id)
    render json: @product.as_json.merge({category_name: @category.category_name, product_images: @product.images.map {|img| url_for(img)} })
  end

  def create
    @product = Product.new(product_params)

    if @product.save
      render json: @product
    else
      render error: { error: 'Unable to create product'}, status: 400
    end
  end

  def update
    @product = Product.find(params[:id])

    if @product
      product.update(product_params)
      render json:{message: 'Product created successfully'}, status:200
    else
      render error: { error: 'Unable to update product'}, status: 400
    end
  end

  def destroy
    @product = Pronduct.find(params[:id])

    if @product
      @product.destroy
      render json: {message:'Product deleted successfully.'},status: 200
    else
      render error: { error: 'Unable to delete product'}, status: 400
    end
  end

  private
  def product_params
    params.require(:product).permit(images: [])
  end
end
