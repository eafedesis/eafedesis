const circles = document.querySelectorAll(".circle");
// console.log(circles);
circles.forEach((circle) => {
  // console.log(circle); // log each circle element individually

  // Add event listener to each circle element to listen for click event
  circle.addEventListener("click", ({ target }) => {
    // const style = getComputedStyle(target); // get computed style properties of the clicked circle
    const { backgroundColor } = getComputedStyle(target);
    // console.log(computedStyle); // log computed style properties of the clicked circle
    // console.log(computedStyle.backgroundColor)
    // style.target.style.backgroundColor = "red"; // change color to red on click
    // style.target.style.border = "2px solid blue"; // add border to circle
    // style.target.style.transform = "scale(2)"; // scale circle by 2x
    // style.target.style.transition = "transform 0.5s ease-in-out"; // animate transition on scale change
    // style.target.style.zIndex = "10"; // bring circle to front of other circles
    // style.target.style.cursor = "pointer"; // change cursor to pointer when hovering over circle
    // style.target.style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0.5)"; // add shadow to circle
    // style.target.style.willChange = "transform"; // enable GPU acceleration for transform changes
    // style.target.style.filter = "drop-shadow(0px 0px 5px
    document.body.style.backgroundColor = backgroundColor;
    // ); // change body background color to the same as the clicked circle's background color
    // console.log(style);
  });
});
