
gsap.registerPlugin(ScrollTrigger);

var animTimeline = gsap.timeline();
//page1
animTimeline.fromTo("#page-landing", {y: 0}, {y:'-90vh'});
animTimeline.fromTo('#page-goOnline', {y:'100vh'}, {y:'-200vh'});
animTimeline.fromTo('#page-expectMore', {y:'100vh'},{y:'-150vh'});
animTimeline.fromTo('#page-expectMore', {opacity:1},{opacity:0} );
animTimeline.fromTo('#page-landing', {opacity:1},{opacity:0});
animTimeline.fromTo('#page-showcase', {y:'100vh'}, { y:'-50vh'});
animTimeline.fromTo('#page-contactUs', {y:'100vh'}, { y:'0vh'});

ScrollTrigger.create({
  animation: animTimeline,
  scrub:true,
})