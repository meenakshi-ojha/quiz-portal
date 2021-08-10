class McqQuestionAnswersController < ApplicationController
  before_action :authorize_request
  before_action :set_mcq_question_answer, only: [:show, :update, :destroy]

  # GET /mcq_question_answers
  def index
    @mcq_question_answers = McqQuestionAnswer.all

    render json: @mcq_question_answers
  end

  # GET /mcq_question_answers/1
  def show
    render json: @mcq_question_answer
  end

  # POST /mcq_question_answers
  def create
    @mcq_question=McqQuestion.find(params[:mcq_question_id])
    if @mcq_question.mcq_question_answer
      render json:"you have already set the answer of this question"
    else
    @mcq_question_answer = McqQuestionAnswer.new(mcq_question_answer_params)
    @mcq_question_answer.mcq_question_id=@mcq_question.id
    @mcq_question_answer.save
    if @mcq_question_answer.save
      render json: @mcq_question_answer, status: :created
    else
      render json: @mcq_question_answer.errors, status: :unprocessable_entity
    end
  end
  end

  # PATCH/PUT /mcq_question_answers/1
  def update
    if @mcq_question_answer.update(mcq_question_answer_params)
      render json: @mcq_question_answer
    else
      render json: @mcq_question_answer.errors, status: :unprocessable_entity
    end
  end

  # DELETE /mcq_question_answers/1
  def destroy
    @mcq_question_answer.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mcq_question_answer
      @mcq_question_answer = McqQuestionAnswer.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def mcq_question_answer_params
      params.require(:mcq_question_answer).permit(:mcq_question_option_id)
    end
end
