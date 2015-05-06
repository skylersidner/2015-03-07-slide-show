var currentSlide = 1


window.onload = function() {
  // listens for start link
  firstSlide = document.getElementById("start");
  // upon the "click" event, do this function
  firstSlide.addEventListener("click", listFirstSlide);
  // ?????
  firstSlide.onclick = function() {return false};
  
  // listens for "Previous" button
  findButton = document.getElementById("prev_button");
  findButton.addEventListener("click", prevSlide);
  findButton.onclick = function() {return false};
  
  // listens for "Next" button
  findButton = document.getElementById("next_button");
  findButton.addEventListener("click", nextSlide);
  findButton.onclick = function() {return false};

  // at the end of the load function, do this function
  listFirstSlide()
}

function listFirstSlide() {
  // set the local variable to a new request object
  var js_req = new XMLHttpRequest;
  // ????
  js_req.open("post", "http://localhost:4567/landing");
  // ????
  js_req.send();
  // when a response comes back as finished loading, do this function
  js_req.addEventListener("load", loadFunction, false);
};

function loadFunction() {
  // ????
  r = (JSON.parse(this.response));

  // set each of these HTML DOM elements to contain these values, based on
  // the attributes of the passed Slide class object
  document.getElementById("title").innerHTML = r.title;
  document.getElementById("slide_text").innerHTML = r.body_text;
  document.getElementById("current_slide").innerHTML = r.slide_order;

}


function prevSlide() {
  // set the variable to a new FormData object
  var params = new FormData()
  // ????
  params.append("current", currentSlide)

  // set the variable to a new request object
  var js_req = new XMLHttpRequest;
  // 
  js_req.open("post", "http://localhost:4567/prev");
  // pass the params variable to the route handler
  js_req.send(params);
  // when a response comes back as finished loading, do this anonymous function
  js_req.addEventListener("load", function(){
    r = (JSON.parse(js_req.response));

    document.getElementById("title").innerHTML = r.title;
    document.getElementById("slide_text").innerHTML = r.body_text;
    document.getElementById("current_slide").innerHTML = r.slide_order;
    currentSlide = r.slide_order

  }, false);
}

function nextSlide() {
  var params = new FormData()
  params.append("current", currentSlide)

  var js_req = new XMLHttpRequest;
  js_req.open("post", "http://localhost:4567/next");
  js_req.send(params);
  js_req.addEventListener("load", function(){
    r = (JSON.parse(js_req.response));

    document.getElementById("title").innerHTML = r.title;
    document.getElementById("slide_text").innerHTML = r.body_text;
    document.getElementById("current_slide").innerHTML = r.slide_order;
    currentSlide = r.slide_order

  }, false);
}


