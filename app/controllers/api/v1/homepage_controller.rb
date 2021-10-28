class Api::V1::HomepageController < ApplicationController
  def index
    @categories = Category.all
    # @products = Product.where(category_id: category.id).limit(4)

    render json: @categories.map{
      |category| category.as_json.merge({
        'products': Product.where(category_id: category.id).limit(4)
        .with_attached_images.order(created_at: :desc).map {|product| product.as_json.merge({product_images: product.images.map {|img| url_for(img)}})}})} 
  end
end