(function() {


//variables
var result = $('#result'),
		textInput = $('#text-form'),
		cssResultArea = $('#cssCode'),
		htmlResultArea = $('#htmlCode');


//activate slider of border radius and drag value from slider to drop to button
$('#slider1').slider({
	range: 'min',
	min: 0,
	max: 20,
	value: 4,
	animate: true,
	slide: function(event, ui) {
		var newRadius = ui.value,
				newSize = parseInt( result.css('border-width'), 10 );
		result.css({
			'border-radius' : newRadius
		});
		updateResultCSS(newRadius, newSize);
	}
});

//activate slider of border size and drag value from slider to drop to button
$('#slider2').slider({
	range: 'min',
	min: 0,
	max: 10,
	value: 0,
	animate: true,
	slide: function(event, ui) {
		var bdRadius = result.css('border-radius'),
				newRadius = Math.round( parseFloat(bdRadius) ),
				newSize = ui.value;
		result.css({
			'border-width' : newSize
		});
		updateResultCSS(newRadius, newSize);
	}
});

// drag text from input and drop to button
textInput.on('keyup', function() {
	var newText = $(this).val();
	$(result).text(newText);
	updateResultHTML();
})


//updateResultBorderRadiusAndSize
var updateResultCSS = function(bdRadius, bdSize) {
	if (bdRadius > 0 && bdSize > 0) {
				cssResultArea.text(
				'-webkit-border-radius: ' + bdRadius + 'px;\n' +
				'-moz-border-radius: ' + bdRadius + 'px;\n'+
				'-ms-border-radius: ' + bdRadius + 'px;\n' +
				'-o-border-radius: ' + bdRadius + 'px;\n' +
				'border-radius: ' + bdRadius + 'px;\n' +
				'border-width: ' + bdSize + 'px;\n'
		)
	} else if (bdRadius > 0 && bdSize < 1) {
				cssResultArea.text(
				'-webkit-border-radius: ' + bdRadius + 'px;\n' +
				'-moz-border-radius: ' + bdRadius + 'px;\n'+
				'-ms-border-radius: ' + bdRadius + 'px;\n' +
				'-o-border-radius: ' + bdRadius + 'px;\n' +
				'border-radius: ' + bdRadius + 'px;\n'
		)
	} else if (bdRadius < 1 && bdSize > 0) {
				cssResultArea.text(
				'border-width: ' + bdSize + 'px;\n'
		)
	} else if (bdRadius < 1 && bdSize < 1) {
				cssResultArea.text('')
	}
}

//updateResultHTML
var updateResultHTML = function() {
	var txtInput = result.text();
	htmlResultArea.text(
				'<button>' + txtInput + '</button>\n'
	)
}


})();