class Slide
  
  attr_reader :id
  attr_accessor :title, :body_text, :slide_order
  
  def initialize(options)
    @id = options["id"]
    @title = options["title"]
    @body_text = options["body_text"]
    @slide_order = options["slide_order"]
  end
  
  
  
  
  
  
end #class