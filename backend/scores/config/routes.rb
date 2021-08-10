Rails.application.routes.draw do
  resources :text_answers
  resources :mcq_answers
  resources :scores
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
