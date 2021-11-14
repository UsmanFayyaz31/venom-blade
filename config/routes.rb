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
  root 'homepage#index'
  get 'get_current_user' => "users#get_current_user"
  get '/users/sign_out' => "sign_out :users"
  get '*path', to: 'homepage#index', constraints: lambda {|req|
    req.path.exclude? 'rails/active_storage'
  }
end
