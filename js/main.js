(function() {

var app = {
	initialize: function() {
		this.setUpListeners();
	},
	setUpListeners: function() {

		//activate slider of border radius
		$('#slider1').slider({
			range: 'min',
			min: 0,
			max: 20,
			value: 4,
			animate: true,
			slide: $.proxy(this.changeRadius, this)
		});

		//activate slider of border size
		$('#slider2').slider({
			range: 'min',
			min: 0,
			max: 10,
			value: 0,
			animate: true,
			slide: $.proxy(this.changeSize, this)
		});

		// drag text from input and drop to button
		$('#text-form').on('keyup', $.proxy(this.changeText, this));

	},



	result : $('#result'),
	changeRadius: function(event, ui) {
		//  drag value from slider to drop to button
		var newRadius = ui.value,
				newSize = parseInt( this.result.css('border-width'), 10 );
		this.result.css({
			'border-radius' : newRadius
		});
		this.updateResultCSS(newRadius, newSize);
	},

	changeSize: function(event, ui) {
		//  drag value from slider to drop to button
		var bdRadius = this.result.css('border-radius'),
				newRadius = Math.round( parseFloat(bdRadius) ),
				newSize = ui.value;
		this.result.css({
			'border-width' : newSize
		});
		this.updateResultCSS(newRadius, newSize);
	},

	changeText: function() {
		//  drag text from input and drop to button
		var newText = $('#text-form').val();
		$(this.result).text(newText);
		this.updateResultHTML();
	},

	updateResultCSS: function(bdRadius, bdSize) {
		//  updateResultBorderRadiusAndSize
		var cssResultArea = $('#cssCode');

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
	},

	updateResultHTML: function() {
		//  updateResultHTML
		var txtInput = this.result.text(),
				htmlResultArea = $('#htmlCode');
		htmlResultArea.text(
					'<button>' + txtInput + '</button>\n'
		)
	}


}

app.initialize();

})();