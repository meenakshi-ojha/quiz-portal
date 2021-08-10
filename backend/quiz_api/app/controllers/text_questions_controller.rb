class TextQuestionsController < ApplicationController
  before_action :authorize_request
  before_action :set_text_question, only: [:show, :update, :destroy]

  # GET /text_questions
  def index
    @quiz=Quiz.find(params[:quiz_id])
    @text_questions = @quiz.text_questions.all
    response=[]
    @text_questions.each do |question|
     @text_questions_answer=question.text_question_answer
     response.push({ :question => question, :answer => @text_questions_answer })
    end
   
    render json: response
  end

  # GET /text_questions/1
  def show
    @text_questions_answer=@text_question.text_question_answer
    @response={ :question => @text_question, :answer => @text_questions_answer }
    render json: @response
  end

  # POST /text_questions
  def create
    @quiz=Quiz.find(params[:quiz_id])
    if !@quiz.open
      render json:"quiz closed no more questions can be added"
    else
    @text_question = TextQuestion.new(text_question_params)
    @text_question.quiz_id=@quiz.id
    @text_question.save
    if @text_question.save
      render json: @text_question, status: :created
    else
      render json: @text_question.errors, status: :unprocessable_entity
    end
  end
  end

  # PATCH/PUT /text_questions/1
  def update
    if @text_question.update(text_question_params)
      render json: @text_question
    else
      render json: @text_question.errors, status: :unprocessable_entity
    end
  end

  # DELETE /text_questions/1
  def destroy
    @text_question.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_text_question
      @text_question = TextQuestion.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def text_question_params
      params.require(:text_question).permit( :question, :ques_type)
    end
end
