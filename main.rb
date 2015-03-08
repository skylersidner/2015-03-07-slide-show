require 'pry'
require 'sinatra'
require 'json'
require 'sqlite3'

require_relative 'database/db_setup.rb'


get "/" do
  erb :"homepage"
end