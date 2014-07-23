

(function() {

//variables
var changeRadius = $('#slider1'),
		changeBorder = $('#slider2'),
		result = $('#result'),
		maxRadius = 22.
		minRadius = 0;

//activate slider of border radius
$('#slider1').slider({
	range: 'min',
	min: 0,
	max: 23,
	value: 4,
	slide: function(event, ui) {
		var newRadius = changeRadius.slider('value');
				// console.log(newRadius);
		result.css({
			'border-radius' : newRadius
		})
	}
});



$('#slider2').slider({
	range: 'min'
});







})();