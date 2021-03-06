Rails.application.routes.draw do
  root 'site#index'
  get 'web' => 'site#web'
  get 'webmobile' => 'site#webmobile'
  get 'que_hacemos' => 'site#que_hacemos'
  get 'equipo' => 'site#equipo'
  get 'portfolio' => 'site#portfolio'
  get 'contacto' => 'site#contacto'
  post 'contacto' => 'site#new_contact', as: :new_contact

  get 'job_asad' => 'site#job_asad'
  get 'job_bienal' => 'site#job_bienal'
  get 'job_comotti' => 'site#job_comotti'
  get 'job_jpd' => 'site#job_jpd'
  get 'job_martina' => 'site#job_martina'
  get 'job_micapinna' => 'site#job_micapinna'
  get 'job_micocina' => 'site#job_micocina'
  get 'job_natuveliz' => 'site#job_natuveliz'
  get 'job_pakua' => 'site#job_pakua'
  get 'job_tucmusica' => 'site#job_tucmusica'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
