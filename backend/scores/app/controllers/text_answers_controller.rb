class TextAnswersController < ApplicationController
    before_action :authorize_guest
    def index
        @text_answers=TextAnswer.where(guest_id: (@guest['id']))
        render json: @text_answers
    end

    def create
        @text_answer=TextAnswer.new(text_answers_params)
        @text_answer.guest_id=@guest['id']
        @text_answer.save
        if @text_answer.save
            render json: @text_answer, status: :created
          else
            render json: @text_answer.errors, status: :unprocessable_entity
        end
    
    end

    private
    def text_answers_params
        params.permit(:quiz_id,:ques_id, :ques_type,:answer,:is_correct)
      end

end
