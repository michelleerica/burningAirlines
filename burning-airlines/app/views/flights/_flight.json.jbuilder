json.extract! flight, :id, :name, :date, :departure, :arrival, :airplane_id, :created_at, :updated_at
json.url flight_url(flight, format: :json)
