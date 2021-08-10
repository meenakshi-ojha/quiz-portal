class Score < ApplicationRecord
    validates :quiz_id, presence: true
    validates :score, presence: true
    validates :guest_id, presence: true
    validates :guest_quizid,presence: true ,uniqueness:true
end
