Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :static_pages, only: [:index]

  scope :api do
    scope :v1 do
      resources :messages
    end
  end
end
