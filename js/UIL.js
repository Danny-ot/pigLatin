// User Interface
$(document).ready(function(){
    $("#form").submit(function(event){
        event.preventDefault();

        const input = $("#input").val();
        const display  = pigLLatin(input)
        $("#display").text(display)
    })
})