Rails.application.routes.draw do
  resources :static_pages
  root "static_pages#index"

  # # creates routes like /api/v1/users
  # # and path helpers like `users_path`
  scope :api do
    scope :v1 do
      resources :messages
    end
  end


end
