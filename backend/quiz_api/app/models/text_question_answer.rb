class TextQuestionAnswer < ApplicationRecord
  validates :text_question_id , presence: true
  validates :answer , presence:true
  belongs_to :text_question
end
