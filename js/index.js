window.scrollVal = 0;

var updateScrollProperty = function () {
  window.requestAnimationFrame(updateScrollProperty);
  window.scrollVal =
    window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
  document.documentElement.style.setProperty("--scroll", window.scrollVal);
};

window.requestAnimationFrame(updateScrollProperty);
updateScrollProperty();
