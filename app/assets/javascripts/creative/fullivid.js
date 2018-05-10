/**
* @name jQuery fullvid
* @author M'c kenneth Licon
* @link http://mlicon.ca
* @version 1.0.0
*/

$(document).ready(function() {
  $('body')
    .prepend('<div class="vidcover"></div>')
    .hover (
  		function() {
  			$('.vidcover').css({'opacity':'0.4'})
 	 	},
 	 	function() {
 	 		$('.vidcover').css({'opacity':'0'})
 	 	}
  	);

	$(window).resize( function(){
		var theWidth = $(window).width();
		var theHeight = $(window).height();
		var newWidth = (theHeight*1.77777778);
		var newHeight = (theWidth/1.77777778);

		if ( (theWidth > 1280) && (newHeight > theHeight )) {
			$('.fullvid').css({'width':theWidth, 'height':newHeight});
		}

		if ( (theHeight > 720) && (newWidth > theWidth )) {
			$('.fullvid').css({'height':theHeight, 'width':newWidth});
		}

		$('.vidcover').css({'height':theHeight, 'width':theWidth});
	}).resize();
});
