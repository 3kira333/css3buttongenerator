(function() {

//variables
var result = $('#result'),
		textInput = $('#text-form'),
		cssResultArea = $('#cssCode'),
		htmlResultArea = $('#htmlCode');

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
		});
		updateResult();
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
		});
		updateResult();
	}
});

textInput.on('change', function() {
	var newText = $(this).val();
	console.log(newText);
	$(result).text(newText);
	updateResult();
})

var updateResult = function() {
//get new css and html
	var bdRadius = result.css('border-radius'),
			bdRoundRadius = parseInt(bdRadius, 10),
			bdSize = result.css('border-width'),
			txtInput = result.text();
// put in css code
	cssResultArea.text(
				'-webkit-border-radius: ' + bdRoundRadius + 'px;\n' +
				'-moz-border-radius: ' + bdRoundRadius + 'px;\n'+
				'-ms-border-radius: ' + bdRoundRadius + 'px;\n' +
				'-o-border-radius: ' + bdRoundRadius + 'px;\n' +
				'border-radius: ' + bdRoundRadius + 'px;\n' +
				'border-width: ' + bdSize + ';\n'
	);
// put in html code
	htmlResultArea.text(
				'<button>' + txtInput + '</button>\n'
	)
};


})();