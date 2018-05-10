Rails.application.routes.draw do
  get 'welcome/homepage'
  get 'creatives/index'


  root 'creatives#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
