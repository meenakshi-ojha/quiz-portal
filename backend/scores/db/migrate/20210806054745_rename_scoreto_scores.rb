class RenameScoretoScores < ActiveRecord::Migration[6.1]
  def change
    def change
      rename_table :score, :scores
    end 
  end
end
