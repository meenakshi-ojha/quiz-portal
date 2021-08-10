class CreateMcqQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :mcq_questions do |t|
      t.references :quiz, null: false, foreign_key: true
      t.string :question
      t.string :ques_type

      t.timestamps
    end
  end
end
