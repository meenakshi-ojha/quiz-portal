class McqAnswersController < ApplicationController
    before_action :authorize_guest
    def index
        @mcq_answers=McqAnswer.where(guest_id: (@guest['id']))
        render json: @mcq_answers
    end

    def create
        
        @mcq_answer=McqAnswer.new(mcq_answers_params)
        @mcq_answer.guest_id=@guest['id']
        @mcq_answer.save
        if @mcq_answer.save
            render json: @mcq_answer, status: :created
          else
            render json: @mcq_answer.errors, status: :unprocessable_entity
        end
    
    end

    private
    def mcq_answers_params
        params.require(:mcq_answer).permit(:quiz_id,:ques_id, :ques_type,:option_id,:is_correct)
      end
    
end
