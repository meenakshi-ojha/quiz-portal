class CreateQuizzes < ActiveRecord::Migration[6.1]
  def change
    create_table :quizzes do |t|
      t.integer :user_id
      t.string :title
      t.boolean :open
      t.boolean :completed

      t.timestamps
    end
  end
end
