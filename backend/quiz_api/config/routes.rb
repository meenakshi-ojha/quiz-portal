Rails.application.routes.draw do
  resources :quizzes , :path =>"quiz" do
    resources :mcq_questions , :path => "mcq"do
      resources :mcq_question_answers , :path => "ans"
      resources :mcq_question_options , :path => "opt"
    end
    resources :text_questions , :path => "text" do
      resources :text_question_answers , :path => "ans"
    end
  end
  get '/guestquiz/:id', to: 'quizzes#guestquiz'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
