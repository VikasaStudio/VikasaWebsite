
gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.matchMedia({
  
  "(min-width:320px) and (max-width:666px)": function(){
    var animTimeline = gsap.timeline({
      scrollTrigger:{
        scrub:0.5
      }
    });
    animTimeline.fromTo("#page-landing", 10,{y: 0}, {y:'-90vh'});
    animTimeline.fromTo('#page-expectMore', 10,{opacity:'0'},{opacity:1},"-=10");
    animTimeline.fromTo('#page-goOnline', 10, {y:'100vh'}, {y:'-280vh'},"-=6");
    animTimeline.fromTo('#page-expectMore', 10,{y:'100vh'},{y:'-180vh'},"-=4.5");
    animTimeline.fromTo('#page-expectMore', {opacity:1},{opacity:0}, "-=1");
    animTimeline.fromTo('#page-landing', {opacity:1},{opacity:0},"-=7");
    animTimeline.fromTo('#page-showcase', 10, {y:'100vh'}, { y:'-70vh'}, "-=6");
    animTimeline.fromTo('#page-contactUs', 10, {y:'100vh'}, { y:'0vh'}, "-=3");

  },
  
  "(min-width:667px) and (max-width:1823px)": function(){
    var animTimeline = gsap.timeline({
      scrollTrigger:{
        scrub:0.2
      }
    });
    animTimeline.fromTo("#page-landing", 10,{y: 0}, {y:'-90vh'});
    animTimeline.fromTo('#page-goOnline', 10, {y:'100vh'}, {y:'-280vh'},"-=6");
    animTimeline.fromTo('#page-expectMore', 10,{y:'100vh'},{y:'-150vh'},"-=7");
    animTimeline.fromTo('#page-expectMore', {opacity:1},{opacity:0}, "-=3");
    animTimeline.fromTo('#page-landing', {opacity:1},{opacity:0},"-=7");
    animTimeline.fromTo('#page-showcase', 10, {y:'100vh'}, { y:'-50vh'}, "-=8");
    animTimeline.fromTo('#page-contactUs', 10, {y:'100vh'}, { y:'0vh'}, "-=8");
  },

  "(min-width:1824px)": function(){
    var animTimeline = gsap.timeline({
      scrollTrigger:{
        scrub:1
      }
    });
    animTimeline.fromTo("#page-landing", 10,{y: 0}, {y:'-90vh'});
    animTimeline.fromTo('#page-goOnline', 10, {y:'100vh'}, {y:'-280vh'},"-=4");
    animTimeline.fromTo('#page-expectMore', 10,{y:'100vh'},{y:'-150vh'},"-=8.5");
    animTimeline.fromTo('#page-expectMore', {opacity:1},{opacity:0}, "-=3");
    animTimeline.fromTo('#page-landing', {opacity:1},{opacity:0},"-=7");
    animTimeline.fromTo('#page-showcase', 10, {y:'100vh'}, { y:'-50vh'}, "-=7");
    animTimeline.fromTo('#page-contactUs', 10, {y:'100vh'}, { y:'0vh'},"-=7");
  }

})