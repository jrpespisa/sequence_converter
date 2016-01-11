Rails.application.routes.draw do
  root 'translators#index'
  resources :translators, only: [:index, :create]
end
