class CreateScores < ActiveRecord::Migration[6.1]
  def change
    create_table :scores do |t|
      t.integer :guest_id
      t.integer :quiz_id
      t.float :score

      t.timestamps
    end
  end
end
