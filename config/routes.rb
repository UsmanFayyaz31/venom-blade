Rails.application.routes.draw do
  devise_for :users
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      resources :products
      resources :categories
      resources :homepage
      resources :orders
    end
  end

  devise_scope :user do
    get "/users/sign_in" => "devise/sessions#new"
    delete "/users/sign_out" => "devise/sessions#destroy"
  end

  root 'homepage#index'
  get '/cart/get_current_user' => "users#get_current_user"
  # get '/users/sign_out' => "logout :users"
  get '*path', to: 'homepage#index', constraints: lambda {|req|
    req.path.exclude? 'rails/active_storage'
  }
end
