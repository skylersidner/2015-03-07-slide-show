var currentSlide = 1


window.onload = function() {
  // listens for start link
  firstSlide = document.getElementById("start");
  // upon the "click" event, do this function
  firstSlide.addEventListener("click", listFirstSlide);
  // when this is clicked, do this function
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
  // which route will this go to
  js_req.open("post", "http://localhost:4567/landing");
  // push this to the aforementioned route
  js_req.send();
  // when a response is finished loading, do this function
  js_req.addEventListener("load", loadFunction, false);
  return false;
};

function loadFunction() {
  // "this" refers to the context the function is being called in
  r = (JSON.parse(this.response));

  // set each of these HTML DOM elements to contain these values, based on
  // the attributes of the Slide class object passed by the route
  document.getElementById("title").innerHTML = r.title;
  document.getElementById("slide_text").innerHTML = r.body_text;
  document.getElementById("current_slide").innerHTML = r.slide_order;

}


function prevSlide() {
  // set the variable to a new FormData object
  var params = new FormData()
  // adds info re: the current slide to the form info being passed to the route
  params.append("current", currentSlide)

  // set the variable to a new request object
  var js_req = new XMLHttpRequest;
  // determines the route for the request
  js_req.open("post", "http://localhost:4567/prev");
  // pass the params variable to the route handler
  js_req.send(params);
  // when a response comes back as finished loading, do this anonymous function
  js_req.addEventListener("load", function(){
    r = (JSON.parse(js_req.response));

    document.getElementById("title").innerHTML = r.title;
    document.getElementById("slide_text").innerHTML = r.body_text;
    document.getElementById("current_slide").innerHTML = r.slide_order;
    
    // set the global variable to the slide_order value of the new slide
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


