class AddColumnToGuests < ActiveRecord::Migration[6.1]
  def change
    add_column :guests, :username, :string
  end
end
