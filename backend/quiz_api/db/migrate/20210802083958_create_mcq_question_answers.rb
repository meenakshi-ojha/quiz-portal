class CreateMcqQuestionAnswers < ActiveRecord::Migration[6.1]
  def change
    create_table :mcq_question_answers do |t|
      t.references :mcq_question, null: false, foreign_key: true
      t.references :mcq_question_option, null: false, foreign_key: true

      t.timestamps
    end
  end
end
