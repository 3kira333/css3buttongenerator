(function() {

//variables
var result = $('#result');

//activate slider of border radius
$('#slider1').slider({
	range: 'min',
	min: 0,
	max: 20,
	value: 4,
	animate: true,
	slide: function(event, ui) {
		var newRadius = ui.value;
		result.css({
			'border-radius' : newRadius
		})
	}
});


//activate slider of border size
$('#slider2').slider({
	range: 'min',
	min: 1,
	max: 20,
	value: 0,
	animate: true,
	slide: function(event, ui) {
		var newSize = ui.value;
		result.css({
			'border-width' : newSize
		})
	}
});



})();