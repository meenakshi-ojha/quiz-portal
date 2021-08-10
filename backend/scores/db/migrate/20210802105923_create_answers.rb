class CreateAnswers < ActiveRecord::Migration[6.1]
  def change
    create_table :text_answers do |t|
      t.integer :guest_id
      t.integer :ques_id
      t.integer :quiz_id
      t.string :ques_type
      t.string :answer
      t.integer :is_correct

      t.timestamps
    end
    create_table :mcq_answers do |t|
      t.integer :guest_id
      t.integer :ques_id
      t.integer :quiz_id
      t.string :ques_type
      t.integer :option_id
      t.integer :is_correct

      t.timestamps
    end

    create_table :score do |t|
      t.integer :guest_id
      t.integer :quiz_id
      t.float :score
 

      t.timestamps
    end
  end
  
end
