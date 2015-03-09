class Slide
  
  attr_reader :id
  attr_accessor :title, :body_text, :slide_order
  
  def initialize(options)
    @id = options["id"]
    @title = options["title"]
    @body_text = options["body_text"]
    @slide_order = options["slide_order"]
  end
  
  def self.get_first_slide
    slide = DATABASE.execute("SELECT * FROM slides WHERE id = '1'")
    slide = slide[0]
  end
  

  
  def get_next_slide(slide_order_value)
    n_slide = slide_order_value + 1
    slide = DATABASE.execute("SELECT * FROM slides WHERE id = '#{n_slide}")
    slide = slide[0]
  end
  
  def get_prev_slide(slide_order_value)
    p_slide = slide_order_value - 1
    slide = DATABASE.execute("SELECT * FROM slides WHERE id = '#{p_slide}")
    slide = slide[0]
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
  
  
end #class