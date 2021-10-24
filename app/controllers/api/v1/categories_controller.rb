class Api::V1::CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render json: @categories
end

def show
    @categories = Category.find(params[:id])
    render json: @categories
end

def create
    @categories = Category.new(category_params)

    if @categories.save
        render json: @categories
    else
        render error: { error: 'Unable to create product'}, status: 400
    end
end
end
