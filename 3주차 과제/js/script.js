$(function(){
    $('nav>ul>li').mouseenter(function(){
        $(".sub").stop().slideDown()
    })
    
    $("nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp()
    })
})