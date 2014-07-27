(function() {

var app = {
	initialize: function() {
		app.setUpListeners();
	},
	setUpListeners: function() {

		//activate slider of border radius
		$('#slider1').slider({
			range: 'min',
			min: 0,
			max: 20,
			value: 4,
			animate: true,
			slide: app.changeRadius
		});

		//activate slider of border size
		$('#slider2').slider({
			range: 'min',
			min: 0,
			max: 10,
			value: 0,
			animate: true,
			slide: app.changeSize
		});

		// drag text from input and drop to button
		$('#text-form').on('keyup', app.changeText);

		$('form').on('submit', app.submitForm);
		$('form').on('keyup', 'input', app.removeError);
	},

	submitForm: function(e) {
		e.preventDefault();

		var form = $(this),
		submitButton = form.find('input[type=submit]');

		if (app.validateForm(form) === false) return false;
		submitButton.attr('disabled', 'disabled');


		var email = 'Your HTML code \n' +
								$('#htmlCode').val() +
								'\n' +
								'Your CSS code \n' +
								$('#cssCode').val();
		var data =  $('#inputEmail').val();

		$.ajax({
				url: 'php/mail.php',
				type: 'POST',
				data: {
					'email' : data,
					'getBody' : email
				},
				success: function (data) {
					alert('Your email has been sent successfully!');
				}
			});
	},

	validateForm: function(form) {
			var input = $('#inputEmail'),
					str = input.val(),
					valid = true,
					textError = 'Email required';


			if (str === '') {
				input.tooltip({
					placement: 'right',
					title: textError,
					trigger: 'manual focus'
				}).tooltip('show');
				input.addClass('has-error').removeClass('has-success');
				valid = false;
			} else {
				input.addClass('has-success').addClass('has-success');
				input.tooltip('hide');
			}
			return valid;
	},
	removeError: function() {
		$(this).tooltip('destroy');
		$(this).removeClass('has-error');
	},


	result : $('#result'),
	changeRadius: function(event, ui) {
		//  drag value from slider to drop to button
		var newRadius = ui.value,
				newSize = parseInt( app.result.css('border-top-width'), 10 );// it because of fucking ie and ff
		app.result.css({
			'border-radius' : newRadius
		});
		app.updateResultCSS(newRadius, newSize);
	},

	changeSize: function(event, ui) {
		//  drag value from slider to drop to button
		var newSize = ui.value,
				newRadius = parseInt( app.result.css('border-top-left-radius'), 10 );// it because of fucking ie and ff

		if (newRadius !== NaN) {newRadius = $('#slider1').slider('value')}
		app.result.css({
			'border-width' : newSize
		});
		app.updateResultCSS(newRadius, newSize);
		console.log(newSize);
		console.log($('#slider1').slider('value'));
		console.log(newRadius);
	},

	changeText: function() {
		//  drag text from input and drop to button
		var newText = $('#text-form').val();
		$(app.result).text(newText);
		app.updateResultHTML();
	},

	updateResultCSS: function(bdRadius, bdSize) {
		//  updateResultBorderRadiusAndSize
		var cssResultArea = $('#cssCode');

		if (bdRadius > 0 && bdSize > 0) {
					cssResultArea.val(
					'-webkit-border-radius: ' + bdRadius + 'px;\n' +
					'-moz-border-radius: ' + bdRadius + 'px;\n'+
					'-ms-border-radius: ' + bdRadius + 'px;\n' +
					'-o-border-radius: ' + bdRadius + 'px;\n' +
					'border-radius: ' + bdRadius + 'px;\n' +
					'border-width: ' + bdSize + 'px;\n'
			)
		} else if (bdRadius > 0 && bdSize < 1) {
					cssResultArea.val(
					'-webkit-border-radius: ' + bdRadius + 'px;\n' +
					'-moz-border-radius: ' + bdRadius + 'px;\n'+
					'-ms-border-radius: ' + bdRadius + 'px;\n' +
					'-o-border-radius: ' + bdRadius + 'px;\n' +
					'border-radius: ' + bdRadius + 'px;\n'
			)
		} else if (bdRadius < 1 && bdSize > 0) {
					cssResultArea.val(
					'border-width: ' + bdSize + 'px;\n'
			)
		} else if (bdRadius < 1 && bdSize < 1) {
					cssResultArea.val('')
		}
	},

	updateResultHTML: function() {
		//  updateResultHTML
		var txtInput = app.result.text(),
				htmlResultArea = $('#htmlCode');
		// htmlResultArea.text(
		// 			'<button>' + txtInput + '</button>\n'
		// )
		htmlResultArea.val(
						'<button>' + txtInput + '</button>\n'
			)
	}


}

app.initialize();

})();