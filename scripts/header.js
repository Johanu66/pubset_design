$(function(){
    //Affichage et disparution du menu sur mobile
    $("#nav .bi-x").hide();
    $("#nav_list").hide();
    $("#nav .bi-justify").click(function(){
        $(this).hide();
        $("#nav .bi-x").slideToggle();
        $("#nav_list").slideToggle();
    });
    $("#nav .bi-x").click(function(){
        $(this).hide();
        $("#nav .bi-justify").slideToggle();
        $("#nav_list").slideToggle();
    });
});