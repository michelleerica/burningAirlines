class ChangeReservationTable < ActiveRecord::Migration[5.0]
  def change
      remove_column :reservations, :seat_row, :integer
      remove_column :reservations, :seat_column, :integer
      add_column :reservations, :seat_num, :string
  end
end
