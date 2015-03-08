require 'sqlite3'

DATABASE = SQLite3::Database.new("database/slide_data.db")

DATABASE.execute("CREATE TABLE IF NOT EXISTS slides
                (id INTEGER PRIMARY KEY,
                title TEXT NOT NULL,
                body_text TEXT NOT NULL,
                slide_order INTEGER NOT NULL)")
                
                
DATABASE.results_as_hash = true