$(document).ready(function(){



function displaymore(){
$("#show-this-on-click").slidedown();
$(".readless hide").show();
}


$("readmore").click(displaymore);
});