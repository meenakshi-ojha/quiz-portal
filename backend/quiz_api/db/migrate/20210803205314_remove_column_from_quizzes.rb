class RemoveColumnFromQuizzes < ActiveRecord::Migration[6.1]
  def change
    remove_column :quizzes, :completed, :boolean
  end
end
