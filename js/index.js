
gsap.registerPlugin(ScrollTrigger);

var animTimeline = gsap.timeline({
  scrollTrigger:{
    scrub:0.5,
  }
});

var pageHeight = {};

//page1
animTimeline.fromTo("#page-landing", 10,{y: 0}, {y:'-90vh'});
animTimeline.fromTo('#page-goOnline', 10, {y:'100vh'}, {y:'-280vh'},"-=6");
animTimeline.fromTo('#page-expectMore', 10,{y:'100vh'},{y:'-150vh'},"-=4.5");
animTimeline.fromTo('#page-expectMore', {opacity:1},{opacity:0}, "-=3");
animTimeline.fromTo('#page-landing', {opacity:1},{opacity:0},"-=7");
animTimeline.fromTo('#page-showcase', 10, {y:'100vh'}, { y:'-50vh'}, "-=6");
animTimeline.fromTo('#page-contactUs', 10, {y:'100vh'}, { y:'0vh'});
