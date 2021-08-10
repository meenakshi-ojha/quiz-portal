class TextQuestionAnswersController < ApplicationController
  before_action :authorize_request
  before_action :set_text_question_answer, only: [:show, :update, :destroy]

  # GET /text_question_answers
  def index
    @text_question=TextQuestion.find(params[:text_question_id])
    @text_question_answers = @text_question.text_question_answer

    render json: @text_question_answers
  end

  # GET /text_question_answers/1
  def show
    render json: @text_question_answer
  end

  # POST /text_question_answers
  def create
    @text_question=TextQuestion.find(params[:text_question_id])
    if @text_question.text_question_answer
      render json: "you have already set the answer of this question"
    else
    @text_question_answer = TextQuestionAnswer.new(text_question_answer_params)
    @text_question_answer.text_question_id=@text_question.id
    @text_question.save
    if @text_question_answer.save
      render json: @text_question_answer, status: :created
    else
      render json: @text_question_answer.errors, status: :unprocessable_entity
    end
  end
  end

  # PATCH/PUT /text_question_answers/1
  def update
    if @text_question_answer.update(text_question_answer_params)
      render json: @text_question_answer
    else
      render json: @text_question_answer.errors, status: :unprocessable_entity
    end
  end

  # DELETE /text_question_answers/1
  def destroy
    @text_question_answer.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_text_question_answer
      @text_question_answer = TextQuestionAnswer.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def text_question_answer_params
      params.require(:text_question_answer).permit( :answer)
    end
end
