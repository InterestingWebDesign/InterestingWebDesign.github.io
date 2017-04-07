var dataSource = window.location.protocol + "//" + window.location.hostname + "/data/packages.json"
var slideTitle;
var slideDesc;

$(".slide").ready(function() {
  $(".slide").each(function() {
    var classString = $(this).attr("class");
    var classArray = classString.split(" ");
    var packageID = classArray[1];
    console.log(packageID);

    $.getJSON("data/packages.json", function(select) {
    slideTitle = select.packageData[packageID].title;
    $(".slide." + packageID + " > .textFront > .title").html(slideTitle);
    slideDesc = select.packageData[packageID].description;
    $(".slide." + packageID + " > .textFront > .description").html(slideDesc);
    });
  });
});
