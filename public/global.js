var currentSlide = 1


window.onload = function() {
//listens for start link
  firstSlide = document.getElementById("start");
  firstSlide.addEventListener("click", listFirstSlide);
  firstSlide.onclick = function() {return false};
//listens for "Previous" button
  findButton = document.getElementById("prev_button");
  findButton.addEventListener("click", prevSlide);
  findButton.onclick = function() {return false};
//listens for "Next" button
  findButton = document.getElementById("next_button");
  findButton.addEventListener("click", nextSlide);
  findButton.onclick = function() {return false};

  listFirstSlide()
}

function listFirstSlide() {
  var js_req = new XMLHttpRequest;
  js_req.open("post", "http://localhost:4567/landing");
  js_req.send();
  js_req.addEventListener("load", loadFunction, false);
};

function loadFunction() {

  r = (JSON.parse(this.response));

  document.getElementById("title").innerHTML = r.title;
  document.getElementById("slide_text").innerHTML = r.body_text;
  document.getElementById("current_slide").innerHTML = r.slide_order;

}


function prevSlide() {
  var params = new FormData()
  params.append("current", currentSlide)

  var js_req = new XMLHttpRequest;
  js_req.open("post", "http://localhost:4567/prev");
  js_req.send(params);
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


