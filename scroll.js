$(document).ready(function(){
    
$(window).on("scroll",function(){
    
    var scroll = $(this).scrollLeft();
    var wid = $(window).width();
    var dwid = $(document).width();
    
    
    $("#scroll_ball").css({"left":2+(scroll/(dwid-wid))*95+"%"})
    });
    
});