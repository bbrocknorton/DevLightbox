//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox
$(document).ready(function() {


	var $overlay = $('<div id="overlay"></div>');
	var $img = $('<img>');
	var $caption = $('<p></p>');

	$('body').append($overlay);
	$($overlay).append($img);
	$($overlay).append($caption);


	//Shows overlay when user clicks on image.
	$('#imageGallery a').on('click', function(event) {
		event.preventDefault();
		console.log('event prevented');

		var location = $(this).attr('href');
		console.log(location);

		$img.attr('src', location);

		var cationText = $(this).children().attr('alt');
		console.log(cationText);

		$caption.text(cationText);

		$($overlay).show();
	})

	//Hides overlay when user clicks on it.
	$($overlay).on('click', function() {
		$($overlay).hide();
	})
});