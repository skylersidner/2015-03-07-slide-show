require 'rubygems'
require 'bundler/setup'

require 'pry'
require 'sinatra'
require 'sinatra/activerecord'
require 'json'
require 'sqlite3'

Bundler.require(:default)

set :database, {adapter: "sqlite3", database: "database/slide_data.db"}

require_relative 'database/db_setup.rb'
require_relative 'slide.rb'


get "/" do
  erb :homepage
end

post "/landing" do
  first = Slide.find_by slide_order: 1
  first_hash = first.to_hash
  first_hash.to_json
end

post "/prev" do
  slide = Slide.get_prev_slide(params["current"])
  slide_hash = slide.to_hash
  slide_hash.to_json
end

post "/next" do
  slide = Slide.get_next_slide(params["current"])
  slide_hash = slide.to_hash
  slide_hash.to_json
end
