require 'pry'
require 'sinatra'
require 'json'
require 'sqlite3'

require_relative 'database/db_setup.rb'
require_relative 'slide.rb'


get "/" do
  first = Slide.new(Slide.get_first_slide)
  first_hash = first.to_hash
  first_hash.to_json
  
  erb :"homepage"
end

post "/start" do
  first = Slide.new(Slide.get_first_slide)
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
