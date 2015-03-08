require 'sqlite3'

DATABASE = SQLite3::Database.new("slide_data.db")

DATABASE.execute("INSERT INTO slides (title, body_text, slide_order) VALUES
                ('Ruby', 'Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit. Maecenas faucibus commodo dolor a sagittis. Sed aliquet 
                augue ex, vel rutrum nulla consectetur id.', 1),
                ('SQLite3', 'Vivamus cursus, arcu at tempor condimentum, dui 
                augue gravida metus, ac blandit tellus dui at eros. 
                Sed ac leo metus.', 2),
                ('Sinatra', 'Sed feugiat lectus elit, id feugiat tortor 
                pellentesque eget. Proin nec lacinia orci, vitae dictum nibh. 
                Pellentesque sit amet arcu luctus tortor consequat viverra.', 3),
                ('HTML', 'In maximus, ante quis laoreet laoreet, urna turpis 
                tristique tortor, quis lacinia erat ipsum ut nisi. Donec ut ex 
                pulvinar, rutrum leo vel, venenatis mi.', 4),
                ('CSS', 'Cras non elit luctus, tempus ex ut, eleifend nibh. 
                Fusce et faucibus dolor.', 5),
                ('JavaScript', 'Nulla vulputate id mi et suscipit. Cras nec 
                hendrerit turpis. Suspendisse at leo ut dui aliquam 
                malesuada.', 6),
                ('GitHub', 'Donec non gravida tellus, nec aliquam purus. Nunc 
                sed erat bibendum, laoreet risus et, consectetur augue. 
                Praesent quis lorem justo. Cras ac tincidunt metus.', 7)")