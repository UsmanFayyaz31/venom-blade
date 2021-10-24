class Api::V1::ProductsController < ApplicationController
    belongs_to :category

    def index
        @products = Product.all
        render json: @products
    end

    def show
        @product = Product.find(params[:id])
        render json: @product
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
end
