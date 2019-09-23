$( function() {

    $('#modal-forgot').click( function () {
        $('#exampleModal-entr').arcticmodal({
            overlay: {
                css: {
                    backgroundColor: '#0a4486',
                    opacity: 0.9
                }
            }
        });
    });

    $('#registration').click( function () {
        $('#exampleModal-reg').arcticmodal({
            overlay: {
                css: {
                    backgroundColor: '#0a4486',
                    opacity: 0.9
                }
            }
        });
    });

    $('#confirm').click( function () {
        $('#exampleModal-new-code').arcticmodal({
            overlay: {
                css: {
                    backgroundColor: '#0a4486',
                    opacity: 0.9
                }
            }
        });
    });

    $('#modal4').click( function () {
        $('#exampleModal4').arcticmodal();
    });

    $('#modal5').click( function () {
        $('#exampleModal5').arcticmodal();
    });

    $('#modal6').click( function () {
        $('#exampleModal6').arcticmodal();
    });

});