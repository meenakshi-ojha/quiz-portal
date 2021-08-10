class TextQuestion < ApplicationRecord
  validates :quiz_id , presence: true
    validates :question , presence: true
    validates :ques_type , presence: true , acceptance: {accept: "text"}
  belongs_to :quiz
  has_one:text_question_answer, dependent: :destroy
end
