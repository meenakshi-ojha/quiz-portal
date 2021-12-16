


class QuizzesController < ApplicationController
  before_action :authorize_request , except: :guestquiz
  before_action :set_quiz, only: [:show, :update, :destroy,:guestquiz]
  before_action :authorize_guest, only: :guestquiz
  # GET /quizzes
  def index
    @quizzes = Quiz.where(user_id: (@current_user['id']))
    render json: @quizzes
  end

  # GET /quizzes/1
  def show
    @quiz_text= @quiz.text_questions.all
    @quiz_mcq=@quiz.mcq_questions.all
    responsetext=[]
    @quiz_text.each do |question|
      @text_questions_answer=question.text_question_answer
      responsetext.push({ :question => question, :answer => @text_questions_answer })
     end
     responsemcq=[]
  
     @quiz_mcq.each do |question|
      @mcq_questions_answer=question.mcq_question_answer
      @mcq_question_option=question.mcq_question_options.all
      responsemcq.push({ :question => question,:option =>@mcq_question_option, :answer => @mcq_questions_answer })
     end
     response=[]
     response.push({:quiz=>@quiz ,:text_questions=>responsetext,:mcq_questions =>responsemcq})
    render json: response
  
  end

  def guestquiz
    @quiz_text= @quiz.text_questions.all
    @quiz_mcq=@quiz.mcq_questions.all
    responsetext=[]
    @quiz_text.each do |question|
      @text_questions_answer=question.text_question_answer
      responsetext.push({ :question => question, :answer => @text_questions_answer })
     end
     responsemcq=[]
  
     @quiz_mcq.each do |question|
      @mcq_questions_answer=question.mcq_question_answer
      @mcq_question_option=question.mcq_question_options.all
      responsemcq.push({ :question => question,:option =>@mcq_question_option, :answer => @mcq_questions_answer })
     end
     response=[]
     response.push({:quiz=>@quiz ,:text_questions=>responsetext,:mcq_questions =>responsemcq})
    render json: response
  
  end

  # POST /quizzes
  def create
    
      @quiz = Quiz.new(quiz_params)
      user=@current_user
      user_id = user['id'] 
      puts user_id
      @quiz.user_id=user_id
      @quiz.save

    if @quiz.save
      render json: @quiz, status: :created
    else
      render json: @quiz.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /quizzes/1
  def update
    if @quiz.update(quiz_params)
      render json: @quiz
    else
      render json: @quiz.errors, status: :unprocessable_entity
    end
  end

  # DELETE /quizzes/1
  def destroy
    @quiz.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_quiz
      @quiz = Quiz.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def quiz_params
      
      params.require(:quiz).permit( :title, :open )
    end
end
