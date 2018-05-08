//"Check off specific tasks by clicking on them"
//if <li> is gray
//turn it black
//else
//turn it gray
$('li').click(function(){
    if($(this).css("color")==="rgb(128, 128, 128)"){
        $(this).css({
        color: "black",
        textDecoration: "none"});
    }else{
        $(this).css({
        color: "gray",
        textDecoration: "line-through"});
    }
    $(this).toggleClass("completed");
});
//Click on the X to delete a task
$('span').on("click", function(){alert("hi")});
$(‘ul’).click( function( ){
       alert(‘You clicked on the UL’);
    });
$(‘#container’).click( function( ){
       alert(‘You clicked on the UL’);
    });
$(‘body’).click( function( ){
       alert(‘You clicked on the UL’);
    });