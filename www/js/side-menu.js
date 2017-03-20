/**
 * Created by neilrafferty on 16/03/2017.
 */

function openNav() {
    document.getElementById("side-menu").style.width = "280px";
    document.getElementsByClassName("main")[0].style.marginLeft = "280px";
}

function closeNav() {
    document.getElementById("side-menu").style.width = "0";
    document.getElementsByClassName("main")[0].style.marginLeft = "0";
}

function resize() {
    if (window.innerWidth > 700) openNav();
    else closeNav();
}

$(document).ready(function () {
    //showing/hiding side menu depending on screen size
    resize();
    $(window).resize(function () {
        resize()
    });

    //Menu items and sections variables set to increase efficiency
    var menu_items = $('.menu-item');
    var sections = $('.section');

    //Setting screen from history on load
    populateFromUrl();

    menu_items.click(function () {
        selectContent($(this).attr('id').split('-')[0])
    });



    function selectContent(s) {
        menu_items.removeClass('selected-menu-item');
        $('#' + s + '-button').addClass('selected-menu-item');
        sections.hide();
        $('#' + s + '-section').show();
        resize();
    }
    window.onhashchange = function(){
        if ($('#side-menu').length > 0) {
            populateFromUrl();
        }
    };

    function populateFromUrl() {
        var page_ref = location.hash.split('#').pop();
        if (page_ref.length == 0) {
            selectContent('inbox');
        } else {
            selectContent(page_ref);
        }
    }
});


