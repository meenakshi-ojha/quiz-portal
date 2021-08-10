class McqQuestionsController < ApplicationController
  before_action :authorize_request
  before_action :set_mcq_question, only: [:show, :update, :destroy]

  # GET /mcq_questions
  def index
    @quiz=Quiz.find(params[:quiz_id])
    @mcq_questions = @quiz.mcq_questions.all
    response=[]
    @mcq_questions.each do |question|
     @mcq_questions_answer=question.mcq_question_answer
     @mcq_question_option=question.mcq_question_options.all
     response.push({ :question => question,:option =>@mcq_question_option, :answer => @mcq_questions_answer })
    end
   
    render json: response
  end

  # GET /mcq_questions/1
  def show
    render json: @mcq_question
  end

  # POST /mcq_questions
  def create
    @quiz=Quiz.find(params[:quiz_id])
    if !@quiz.open
      render json: "quiz is closed no more questions may be added"
    else
    @mcq_question = McqQuestion.new(mcq_question_params)
    @mcq_question.quiz_id=@quiz.id
    @mcq_question.save
    if @mcq_question.save
      render json: @mcq_question, status: :created
    else
      render json: @mcq_question.errors, status: :unprocessable_entity
    end
  end
  end

  # PATCH/PUT /mcq_questions/1
  def update
    if @mcq_question.update(mcq_question_params)
      render json: @mcq_question
    else
      render json: @mcq_question.errors, status: :unprocessable_entity
    end
  end

  # DELETE /mcq_questions/1
  def destroy
    @mcq_question.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mcq_question
      @mcq_question = McqQuestion.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def mcq_question_params
      params.require(:mcq_question).permit(:question, :ques_type)
    end
end
