$(document).ready(function(){
    "use strict";

    //ABOUT ME PAGE
    $('.btnContact, .btnProjects, .btnResume').click(function(event){
        $('#hideAboutMe').hide()
    });
    $('.btnAboutMe').click(function(event){
        $('#hideAboutMe').show();
        $('#hideProjects').hide();
    });
    //PROJECTS PAGE
    // $('#hideProjects').removeClass('displayNone');
    $('.btnProjects').click(function(event){
        // event.preventDefault();
        $('.displayNone').show().css('background-color', 'var(--main-pop-color)')
    });
    $('.btnContact, .btnAboutMe, .btnResume').click(function(event){
        $('.displayNone').hide();
    });
})


