/**
 * Created by neilrafferty on 16/03/2017.
 */
function openNav() {
    document.getElementById("side-menu").style.width = "280px";
    document.getElementsByClassName("main")[0].style.marginLeft = "280px";
}

function closeNav() {
    document.getElementById("side-menu").style.width = "0";
    document.getElementsByClassName("main")[0].style.marginLeft= "0";
}

function resize() {
    if(window.innerWidth > 700) openNav()
    else closeNav();
}

$(document).ready(function(){
    resize();
    $(window).resize(function() {
        resize()
    });
});


