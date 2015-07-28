console.log("comingsoon.js file loaded\nCopyright Caleb Stewart & Ben Watts-Marr (c) 2015");

function buildPage() {
  var buildPage = setInterval(function() {
    document.getElementById("h1").innerHTML = "Interesting Web Design";
    document.getElementById("h2").innerHTML = "Coming soon";
  }, 10);
}
