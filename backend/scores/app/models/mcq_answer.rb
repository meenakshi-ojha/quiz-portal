class McqAnswer < ApplicationRecord
    validates :quiz_id, presence: true
    validates :ques_id, presence: true
    validates :guest_id, presence: true
    validates :is_correct, presence: true
    validates :ques_type, presence: true, acceptance: {accept: "mcq"}
  
end
