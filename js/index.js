window.scrollVal = 0;

var updateScrollProperty = function () {
  window.requestAnimationFrame(updateScrollProperty);
  try{
  window.scrollVal =
    window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
    
  document.documentElement.style.setProperty("--scroll", window.scrollVal);
  }catch(err){}
};

window.requestAnimationFrame(updateScrollProperty);
updateScrollProperty();
