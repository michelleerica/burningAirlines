class ChangeColumnToDate < ActiveRecord::Migration[5.0]
  def change
      change_column :flights, :date, :date
  end
end
