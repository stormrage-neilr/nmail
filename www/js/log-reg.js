/**
 * Created by neilrafferty on 26/02/2017.
 */
$(document).ready(function(){
    $('#register-form').hide();

    $('#login-li').click(function(){
        $('#reg-li').removeClass('active');
        $(this).addClass('active');
        $('#register-form').hide();
        $('#login-form').show();
    });

    $('#reg-li').click(function(){
        $('#login-li').removeClass('active');
        $(this).addClass('active');
        $('#login-form').hide();
        $('#register-form').show();
    });

    // function authenticate(){
    //     $.ajax({
    //         type: "POST",
    //         url: "php/dbconnect.php",
    //         cache: false,
    //         success: auth,
    //         error: function (xhr, ajaxOptions, thrownError) {
    //             console.log(xhr.status);
    //             console.log(thrownError);
    //         }
    //     });
    // }
    //
    // function auth(str){
    //     $('#login-li').append(str);
    // }
});
