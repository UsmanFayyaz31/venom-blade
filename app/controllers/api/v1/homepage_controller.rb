class Api::V1::HomepageController < ApplicationController
  def index
    @categories = Category.all
    render json: @categories.map {|category| category.as_json.merge({products: Product.where(category_id: category.id).limit(4)})}
  end
end