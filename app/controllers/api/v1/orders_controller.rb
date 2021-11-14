class Api::V1::OrdersController < ApplicationController
  def index
    @orders = Order.all
    render json: @orders
  end

  def show
    @order = Order.find(params[:id])
    render json: @order
  end

  def create
    @orders = Order.new(order_params)

    if @orders.save
      render json: @orders
    else
      render error: { error: 'Unable to create order'}, status: 400
    end
  end

  def order_params
    params.require(:order).permit(:product_id, :user_id, :quantity)
  end
end
