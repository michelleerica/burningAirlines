# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Airplane.destroy_all

a1 = Airplane.create row: 12, column: 2, name: "747"
a2 = Airplane.create row: 24, column: 4, name: "Sesna"

Flight.destroy_all

f1 = Flight.create name: 23, date: "2017-03-21", departure: "SYD", arrival: "LAX"
f2 = Flight.create name: 100, date: "2017-09-15", departure: "SYD", arrival: "LAX"
f3 = Flight.create name: 90, date: "2017-04-05", departure: "SFO", arrival: "NYC"
f4 = Flight.create name: 23, date: "2017-06-11", departure: "SFO", arrival: "NYC"

User.destroy_all

u1 = User.create firstname: "Michelle", surname: "Lo", password: "chicken", is_admin: true, email: "mlo@gmail.com"
u2 = User.create firstname: "Max", surname: "Bausher", password: "chicken", is_admin: false, email: "maxbausher@gmail.com"
u3 = User.create firstname: "Ryan", surname: "Ruan", password: "chicken", is_admin: false, email: "rruan@gmail.com"

Reservation.destroy_all

r1 = Reservation.create seat_row: 3, seat_column: 1, occupied: true
r2 = Reservation.create seat_row: 6, seat_column: 1, occupied: true
r3 = Reservation.create seat_row: 9, seat_column: 2, occupied: true
r4 = Reservation.create seat_row: 12, seat_column: 2, occupied: true
r5 = Reservation.create seat_row: 15, seat_column: 3, occupied: true
r6 = Reservation.create seat_row: 18, seat_column: 4, occupied: true

a1.flights << f1 << f2
a2.flights << f3 << f4

f1.reservations << r1 << r2
f2.reservations << r3 << r4
f3.reservations << r5
f4.reservations << r6

u1.reservations << r1 << r2
u2.reservations << r3 << r4
u3.reservations << r5 << r6
