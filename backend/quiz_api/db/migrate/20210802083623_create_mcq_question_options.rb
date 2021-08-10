class CreateMcqQuestionOptions < ActiveRecord::Migration[6.1]
  def change
    create_table :mcq_question_options do |t|
      t.references :mcq_question, null: false, foreign_key: true
      t.string :option

      t.timestamps
    end
  end
end
