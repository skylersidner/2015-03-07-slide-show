window.onload = function() {
  testClick = document.getElementById("start"); //listens for start link
  testClick.addEventListener("click", listFirstSlide);
  testClick.onclick = function() {return false};
  
  findForm = document.getElementById("prev_button");//listens for "Previous" button
  findForm.addEventListener("submit", prevSlide);
  findForm.onsubmit = function() {return false};

  findForm = document.getElementById("next_button");//listens for "Next" button
  findForm.addEventListener("submit", nextSlide);
  findForm.onsubmit = function() {return false};
}

function listFirstSlide() {
  var js_req = new XMLHttpRequest;
  js_req.open("post", "http://localhost:4567/start");
  js_req.send();
  js_req.addEventListener("load", function(){
    r = (JSON.parse(js_req.response));  
  
    document.getElementById("title").innerHTML = r.title;
    document.getElementById("slide_text").innerHTML = r.body_text;
    document.getElementById("current_slide").innerHTML = r.slide_order;
    document.getElementById("slide_order_field").innerHTML = r.slide_order;
  
  }, false); 
}

function prevSlide() {
  var js_req = new XMLHttpRequest;
  js_req.open("post", "http://localhost:4567/prev");
  js_req.send();
  js_req.addEventListener("load", function(){
    r = (JSON.parse(js_req.response));  
  
    document.getElementById("title").innerHTML = r.title;
    document.getElementById("slide_text").innerHTML = r.body_text;
    document.getElementById("current_slide").innerHTML = r.slide_order;
    document.getElementById("slide_order_field").innerHTML = r.slide_order;
  
  }, false); 
}

function nextSlide() {
  var js_req = new XMLHttpRequest;
  js_req.open("post", "http://localhost:4567/next");
  js_req.send();
  js_req.addEventListener("load", function(){
    r = (JSON.parse(js_req.response));  
  
    document.getElementById("title").innerHTML = r.title;
    document.getElementById("slide_text").innerHTML = r.body_text;
    document.getElementById("current_slide").innerHTML = r.slide_order;
    document.getElementById("slide_order_field").innerHTML = r.slide_order;
    
  }, false); 
}


