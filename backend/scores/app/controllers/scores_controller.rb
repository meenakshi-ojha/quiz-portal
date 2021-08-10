class ScoresController < ApplicationController
    before_action :authorize_guest
    def index
        @scores=Score.where(guest_id: (@guest['id']))
        render json: @scores
    end

    def create
        @score=Score.new(score_params)
        @score.guest_id=@guest['id']
        @score.save
        @score.guest_quizid=@guest['id'].to_s+params[:quiz_id].to_s
        if @score.save
            render json: @score, status: :created
          else
            render json: @score.errors, status: :unprocessable_entity
        end
    end
    private
    def score_params
        params.require(:score).permit(:quiz_id, :score)
      end
end
