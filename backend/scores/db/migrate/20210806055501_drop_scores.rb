class DropScores < ActiveRecord::Migration[6.1]
  def change
    drop_table :score
  end
end
