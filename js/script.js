var ViewModel = function(minimum, maximum) {
	this.minimum = ko.observable(minimum);
	this.maximum = ko.observable(maximum);
	this.randomNumber = ko.observable(generateRandomNumber(minimum, maximum));

	this.numberGenerator = function() {
		this.randomNumber(generateRandomNumber(this.minimum(), this.maximum()));
	};

	function generateRandomNumber(minimum, maximum) {
		return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
	}
};

ko.applyBindings(new ViewModel(1, 10));