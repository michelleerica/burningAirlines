class CreateFlights < ActiveRecord::Migration[5.0]
  def change
    create_table :flights do |t|
      t.integer :name
      t.datetime :date
      t.string :departure
      t.string :arrival
      t.integer :airplane_id

      t.timestamps
    end
  end
end
