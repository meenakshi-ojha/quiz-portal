class AddGuestQuizidToScore < ActiveRecord::Migration[6.1]
  def change
    add_column :scores, :guest_quizid, :string
  end
end
