$(function(){
    //Affichage et disparution du menu sur mobile
    $("#nav .bi-justify").click(function(){
        $(this).hide()
        $("#nav .bi-x").slideToggle()
        $("#nav_list").slideToggle()
    });
    $("#nav .bi-x").click(function(){
        $(this).hide()
        $("#nav .bi-justify").slideToggle()
        $("#nav_list").slideToggle()
    });

    
    $("#header_profil_picture").mouseenter(function(){
        $("#header_profil_picture ul").slideToggle()
    });
    $("#header_profil_picture").mouseleave(function(){
        $("#header_profil_picture ul").slideToggle()
    });
});