class CreateTextQuestionAnswers < ActiveRecord::Migration[6.1]
  def change
    create_table :text_question_answers do |t|
      t.references :text_question, null: false, foreign_key: true
      t.string :answer

      t.timestamps
    end
  end
end
