class McqQuestion < ApplicationRecord
  validates :question ,presence: true
  validates :ques_type ,presence:true ,acceptance: {accept: "mcq"}
  belongs_to :quiz
  has_many:mcq_question_options, dependent: :destroy
  has_one:mcq_question_answer, dependent: :destroy
end
