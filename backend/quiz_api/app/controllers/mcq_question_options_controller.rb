class McqQuestionOptionsController < ApplicationController
  before_action :authorize_request
  before_action :set_mcq_question_option, only: [:show, :update, :destroy]

  # GET /mcq_question_options
  def index
    @mcq_question=McqQuestion.find(params[:mcq_question_id])
    @mcq_question_options = @mcq_question.mcq_question_option.all

    render json: @mcq_question_options
  end

  # GET /mcq_question_options/1
  def show
    render json: @mcq_question_option
  end

  # POST /mcq_question_options
  def create
    @mcq_question=McqQuestion.find(params[:mcq_question_id])
    @mcq_question_option = McqQuestionOption.new(mcq_question_option_params)
    @mcq_question_option.mcq_question_id=@mcq_question.id
    @mcq_question_option.save
    if @mcq_question_option.save
      render json: @mcq_question_option, status: :created
    else
      render json: @mcq_question_option.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /mcq_question_options/1
  def update
    if @mcq_question_option.update(mcq_question_option_params)
      render json: @mcq_question_option
    else
      render json: @mcq_question_option.errors, status: :unprocessable_entity
    end
  end

  # DELETE /mcq_question_options/1
  def destroy
    @mcq_question_option.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mcq_question_option
      @mcq_question_option = McqQuestionOption.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def mcq_question_option_params
      params.require(:mcq_question_option).permit( :option)
    end
end
