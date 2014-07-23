

(function() {

//variables
var changeRadius = $('#slider1'),
		changeBorderSize = $('#slider2'),
		result = $('#result'),
		maxRadius = 22.
		minRadius = 0;

//activate slider of border radius
$('#slider1').slider({
	range: 'min',
	min: 0,
	max: 22,
	value: 4,
	slide: function(event, ui) {
		var newRadius = changeRadius.slider('value');
				// console.log(newRadius);
		result.css({
			'border-radius' : newRadius
		})
	}
});


//activate slider of border size
$('#slider2').slider({
	range: 'min',
	min: 0,
	max: 20,
	value: 1,
	slide: function(event, ui) {
		var newSize = changeBorderSize.slider('value');
				console.log(newSize);
		result.css({
			'border-width' : newSize
		})
	}
});







})();