window.onload = function() {
  testClick = document.getElementById("test");
  testClick.addEventListener("click", listFirstSlide);
  listLink.onclick = function() {return false};

}

function listFirstSlide() {
  var js_req = new HMLHttpRequest;
  js_req.open("get", "http://localhost:4567/test");
  js_req.send();
  js_req.addEventListener("load", function(){
    r = (JSON.parse(js_req.response));
    alert("Here is the slide info - ID: " + r.id + ", Title: " + r.title + ", Body Text: " + r.body_text + ", Slide Order: " + r.slide_order + ".");
  }, false);
}