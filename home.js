//Reveal Cards if scroll reaches correct row
let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  if (scroll_pos / window.innerHeight > 0.5) {
    $("#tech-card-1").addClass("fade-rise").show();
    setTimeout(() => $("#tech-card-2").addClass("fade-rise").show(), 250);
    setTimeout(() => $("#tech-card-3").addClass("fade-rise").show(), 500);
    setTimeout(() => $("#tech-card-4").addClass("fade-rise").show(), 750);
  }
}

document.addEventListener("scroll", function (e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});
