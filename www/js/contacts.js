/**
 * Created by neilrafferty on 24/03/2017.
 */
$(document).ready(function(){
    // $(".modal-footer").hide();
    $( "#add-contact-form" ).submit(function( event ) {
        event.preventDefault();
    });
    $('#generate-email-button').click(function(){
        var contactName = $('#contact-name-input').val();
        var email = $('#contact-name-input').val();
        $.ajax({
            url: "../php/create-contact.php",
            type: "post",
            data: {
                contactName:contactName,
                email:email
            },
            success: function (response) {
                $(".modal-footer").show();
                $(".modal-footer h3")[0].innerText = response + '@nmail.club';
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert("Something went wrong :( Please try again." + jqXHR.textContent);
            }
        });
    });
});
