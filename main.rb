require 'pry'
require 'sinatra'
require 'json'
require 'sqlite3'

require_relative 'database/db_setup.rb'
require_relative 'slide.rb'


get "/" do
  erb :"homepage"
end

get "/test" do

  first = Slide.new(Slide.get_first_slide)
  first_hash = first.to_hash
  first_hash.to_json
end