Rails.application.routes.draw do


   get '/app' => 'pages#app'
   post '/app' => 'pages#app'

   root 'session#new'

   get '/login' => 'session#new'

   post '/login' => 'session#create'

   delete '/login' => 'session#destroy'


  resources :reservations
  resources :users
  resources :flights
  resources :airplanes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
