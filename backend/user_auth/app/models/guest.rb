class Guest < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :name, presence: true
end
