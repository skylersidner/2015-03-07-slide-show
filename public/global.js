window.onload = function() {
  testClick = document.getElementById("test");
  testClick.addEventListener("click", listFirstSlide);
  testClick.onclick = function() {return false};
  
  // findForm = document.getElementById("findStudent");
  // findForm.addEventListener("submit", findObject);
  // findForm.onsubmit = function() {return false};
  //
  // findForm = document.getElementById("findStudent");
  // findForm.addEventListener("submit", findObject);
  // findForm.onsubmit = function() {return false};
}

function listFirstSlide() {
  var js_req = new XMLHttpRequest;
  js_req.open("get", "http://localhost:4567/test");
  js_req.send();
  js_req.addEventListener("load", function(){
    r = (JSON.parse(js_req.response));  
  
    document.getElementById("title").innerHTML = r.title;
    document.getElementById("slide_text").innerHTML = r.body_text;
    document.getElementById("current_slide").innerHTML = r.slide_order;
    document.getElementById("slide_order_field").innerHTML = r.slide_order;
    
  
  }, false);
  
}