// Simple Script to add the installation instructions to the bookmarklet pages

if($('#installation').load('installing.html #installing')) {
	//console.log('Added the installation help...');
	$('#install-help').hide();
}

function htmlDecode(input){
  var e = document.createElement('div');
  e.innerHTML = input;
  // handle case of empty input
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

// Swap out bookmarklet link references for actual bookmark links
console.log('Adding the bookmarklet link to instructions...');
// Get Bookmarklet URL
var bookmarkletUrl = $('#bookmarklet').attr('href');
console.log('The bookmarklet URL is ' + htmlDecode(bookmarkletUrl));

// Wait a moment, then swap out the links
setTimeout(function() {
$('.bookmarklet').each(function(index) {
	$(this).html('<a href="' + bookmarkletUrl + '">this link</a>');
	//console.log(index);
});
}, 500);




