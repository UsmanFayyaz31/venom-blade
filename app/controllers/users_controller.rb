class UsersController < ApplicationController
  before_action :authenticate_user!

  def get_current_user
    render json: {name: current_user.id}
    end
end