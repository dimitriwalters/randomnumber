'use strict';

(function() {
	function generateRandomNumber(minimum, maximum) {
		return Math.floor(Math.random() * (parseFloat(maximum) - parseFloat(minimum) + 1)) + parseFloat(minimum);
	}

	var ViewModel = function(minimum, maximum) {
		this.minimum = ko.observable(minimum);
		this.maximum = ko.observable(maximum);
		this.randomNumber = ko.observable(generateRandomNumber(minimum, maximum));

		this.numberGenerator = function() {
			if (this.minimum() > this.maximum()) {
				var min = this.maximum();
				var max = this.minimum();

				this.minimum(min);
				this.maximum(max);
			}
			this.randomNumber(generateRandomNumber(this.minimum(), this.maximum()));
		};
	};

	ko.applyBindings(new ViewModel(1, 10));
})();