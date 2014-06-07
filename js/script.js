$('#get-number').click(setNumber);

$('#floor').val(1);
$('#ceiling').val(10);

function setNumber() {
	$('.container').removeClass('no-number');
	var minimum = parseInt($('#floor').val());
	var maximum = parseInt($('#ceiling').val());
	$('#display-number').text(Math.floor(Math.random() * (maximum - minimum + 1)) + minimum);	
}