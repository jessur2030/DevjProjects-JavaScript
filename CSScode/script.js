// //get css style
// window.getComputedStyle(document.documentElement)
// getPropertyValue('--div-background-color');

document.getElementById("dark-theme-btn").addEventListener("click", () => {
  //get root element   //set a background color
  document.documentElement.style.setProperty("--background-color", "#333");
});

document.getElementById("light-theme-btn").addEventListener("click", () => {
  //get root element   //set a background color
  document.documentElement.style.setProperty("--background-color", "#fff");
});
