class Quiz < ApplicationRecord
    validates :user_id , presence: true
    validates :title , presence: true
    # validates :open , presence: true
    has_many:mcq_questions, dependent: :destroy
    has_many:text_questions, dependent: :destroy
end
