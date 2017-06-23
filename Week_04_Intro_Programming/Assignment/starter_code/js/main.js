$(".readmore").hide();
$(".mobile-menu").hide();
$(".learnmore").click(function() {
	$(".mobile-menu").slideToggle("slow",function() {
		$(".learnmore").hide();
		$(".readmore").show();
	});
});

$(".readmore").click(function() {
	$(".mobile-menu").slideToggle("slow", function() {
		$(".readmore").hide();
		$(".learnmore").show();
	});
});








