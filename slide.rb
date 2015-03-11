class Slide < ActiveRecord::Base
  
  # attr_reader :id
  # attr_accessor :title, :body_text, :slide_order
  
  # def initialize(options)
  #   @id = options["id"]
  #   @title = options["title"]
  #   @body_text = options["body_text"]
  #   @slide_order = options["slide_order"]
  # end
  
  # # gets the first slide
  # def self.get_first_slide
  #   slide = DATABASE.execute("SELECT * FROM slides WHERE slide_order = '1'")
  #   slide = slide[0]
  # end

  # takes the current slide_order and retrieves the previous slide record
  def self.get_prev_slide(slide_order_value)
    p_slide = slide_order_value.to_i - 1
    if p_slide == 0
      p_slide = self.count
    end
    
    self.find_by slide_order: p_slide
    
    # slide = DATABASE.execute("SELECT * FROM slides WHERE slide_order = '#{p_slide}'")
    # slide = slide[0]
  end

  # takes the current slide_order and retrieves the next slide record
  def self.get_next_slide(slide_order_value)
    n_slide = slide_order_value.to_i + 1
    if n_slide == (self.count + 1)
      n_slide = 1
    end
    
    self.find_by slide_order: n_slide
    
    # slide = DATABASE.execute("SELECT * FROM slides WHERE slide_order = '#{n_slide}'")
    # slide = slide[0]
  end

  
  # converts to a hash for json use
  def to_hash
    {
      id: id,
      title: title,
      body_text: body_text,
      slide_order: slide_order
    }
  end
  
  private

  # # counts the number of active slides in the DB
  # def self.count_number_of_slides
  #   hash = (DATABASE.execute("SELECT count(slide_order) AS count FROM slides"))[0]
  #   count = hash["count"]
  
  # end
  
end #class