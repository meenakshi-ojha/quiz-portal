class McqQuestionOption < ApplicationRecord
  validates :mcq_question_id ,presence: true
  validates :option, presence: true
  belongs_to :mcq_question
end
