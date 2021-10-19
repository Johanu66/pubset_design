function deleted(id){
    $("#"+id).remove()
};
$(function(){
    var administrator = 1
    $("#plus").click(function(){
        administrator++
        $("#administrators").append('<div id="administrator'+administrator+'" class="my-2 d-flex align-items-center justify-content-between">'+
        '<input type="email" class="form-control" placeholder="Email address">'+
        '<i onclick="deleted(\'administrator'+administrator+'\')" class="bi bi-trash"></i>'+
    '</div>')
    });
});