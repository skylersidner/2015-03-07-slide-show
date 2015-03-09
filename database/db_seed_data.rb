require 'sqlite3'

DATABASE = SQLite3::Database.new("slide_data.db")

body1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit. Maecenas faucibus commodo dolor a sagittis. Sed aliquet 
                augue ex, vel rutrum nulla consectetur id.'

body2 = 'Vivamus cursus, arcu at tempor condimentum, dui 
                augue gravida metus, ac blandit tellus dui at eros. 
                Sed ac leo metus.'

body3 = 'Sed feugiat lectus elit, id feugiat tortor 
                pellentesque eget. Proin nec lacinia orci, vitae dictum nibh. 
                Pellentesque sit amet arcu luctus tortor consequat viverra.'

body4 = 'In maximus, ante quis laoreet laoreet, urna turpis 
                tristique tortor, quis lacinia erat ipsum ut nisi. Donec ut ex 
                pulvinar, rutrum leo vel, venenatis mi.'

body5 = 'Cras non elit luctus, tempus ex ut, eleifend nibh. 
                Fusce et faucibus dolor.'

body6 = 'Nulla vulputate id mi et suscipit. Cras nec 
                hendrerit turpis. Suspendisse at leo ut dui aliquam 
                malesuada.'

body7 = 'Donec non gravida tellus, nec aliquam purus. Nunc 
                sed erat bibendum, laoreet risus et, consectetur augue. 
                Praesent quis lorem justo. Cras ac tincidunt metus.'





DATABASE.execute("INSERT INTO slides (title, body_text, slide_order) VALUES
                ('Ruby', ?, 1),
                ('SQLite3', ?, 2),
                ('Sinatra', ?, 3),
                ('HTML', ?, 4),
                ('CSS', ?, 5),
                ('JavaScript', ?, 6),
                ('GitHub', ?, 7)", body1, body2, body3, body4, body5, body6, body7)