class McqQuestionAnswer < ApplicationRecord
  validates :mcq_question_id , presence: true
  validates :mcq_question_option_id , presence: true
  belongs_to :mcq_question
  belongs_to :mcq_question_option
end
