Rails.application.routes.draw do
  resources :users, param: :_username
  post '/guests', to: 'guests#create'
  get '/showuser', to: 'users#showuser'
  get '/showguest', to: 'guests#showguest'
  post '/user/login', to: 'login#userlogin'
  post '/guest/login', to: 'login#guestlogin'
  get '/*a', to: 'application#not_found'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
