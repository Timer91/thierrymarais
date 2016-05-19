$( function() {
	$( '#form' ).validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			},
			message: {
				required: true
			},
            surname: {
                required: true
            },
            phone: {
                required: true
            },
            city: {
                required: true
            }
		},
		messages: {
			name: {
				required: "Veuillez entrer un nom",
				minlength: "Votre nom doit contenir au moins 2 caractères"
			},
			email: {
				required: "Un email est requis"
			},
			message: {
				required: "Veuillez écrire un message",
			},
            surname: {
                required: "Veuillez entrer un nom"
            },
            phone: {
                required: "Veuillez entrer un numéro de téléphone"
            },
            city: {
                required: "Veuillez entrer votre ville"
            }
		},
		submitHandler: function( form ) {
            $.post( "php/contact.php", $( form ).serialize(), function() {
                $( '#form :input' ).attr( 'disabled', 'disabled' );
                $( '#form' ).fadeTo( "slow", 0.15, function() {
                    $( this ).find( ':input' ).attr( 'disabled', 'disabled' );
                    $( this ).find( 'label' ).css( 'cursor','default' );
                    $( '#success' ).fadeIn();
                });
            })
            .fail( function() {
                $('#form').fadeTo( "slow", 0.15, function() {
                    $('#error').fadeIn();
                });
            })
        }
	});
});
