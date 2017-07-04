class CreateReservations < ActiveRecord::Migration[5.0]
  def change
    create_table :reservations do |t|
      t.integer :seat_row
      t.integer :seat_column
      t.integer :flight_id
      t.integer :user_id
      t.boolean :occupied

      t.timestamps
    end
  end
end
