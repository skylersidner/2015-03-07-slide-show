window.onload = function() {
  testClick = document.getElementById("test");
  testClick.addEventListener("click", listFirstSlide);
  testClick.onclick = function() {return false};

}

function listFirstSlide() {
  var js_req = new XMLHttpRequest;
  js_req.open("get", "http://localhost:4567/test");
  js_req.send();
  js_req.addEventListener("load", function(){
    r = (JSON.parse(js_req.response));  
  
    var title_text = document.createTextNode(r.title);
    document.getElementById("title").appendChild(title_text);
  
    var text = document.createTextNode(r.body_text);
    document.getElementById("slide_text").appendChild(text);
  
    var order = document.createTextNode(r.slide_order);
    document.getElementById("current_slide").appendChild(order);
  
  }, false);
  
}