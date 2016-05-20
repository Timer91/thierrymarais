$( document ).ready( function( e ) {
	// Header
	$( window ).bind( "scroll", function() {
		if ( $( window ).scrollTop() > 0 ) {
			$( "#header_outer" ).addClass( "fixed" );
		}
		else {
			$( "#header_outer" ).removeClass( "fixed" );
		}
		$( "#home" ).css( "opacity", ( ( 100 - $( window ).scrollTop() / 2 ) * 0.01) );
	});
	$( "#header_outer" ).scrollToFixed();

	// Gallery
	document.getElementById( "links" ).onclick = function( event ) {
		event = event || window.event;
		var target = event.target || event.srcElement,
			link = target.src ? target.parentNode : target,
			options = { index: link, event: event },
			links = this.getElementsByTagName( "a" );
		blueimp.Gallery( links, options );
	};

	blueimp.Gallery(
		document.getElementById( "links" ).getElementsByTagName( "a" ),
		{
			container: "#blueimp-gallery-carrousel",
			carousel: true
		}
	);
});

$( window ).load( function(){
	$( ".nav a" ).bind( "click", function( event ){
		var anchor = $( this );

		$( "html, body" ).stop().animate({
			scrollTop: $( anchor.attr( "href" ) ).offset().top - 91
		}, 1500, "easeInOutExpo" );
		event.preventDefault();
	});
});

wow = new WOW(
	{
		animateClass: "animated",
		offset: 100
	}
);
wow.init();

