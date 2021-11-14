class UsersController < ApplicationController
  before_action :authenticate_user!

  def get_current_user
    render json: {user: current_user}
  end
end