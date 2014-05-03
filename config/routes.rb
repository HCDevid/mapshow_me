MapshowMe::Application.routes.draw do
  root 'links#new'
  resources :links

  devise_for :users

  get ':in_url' => 'links#go'
end
