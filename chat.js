//mon Bot
var bot = {
	"question": "le gras",
	"response": "c'est la vie"
};

$("nav").find("div").css("text-align", "center");
$("nav").find("div").css("font-size", "30px");

$("#displayTxtArea").css("width", 500);
$("#displayTxtArea").css("height", 300);
$("#displayTxtArea").css("border", "1px solid");

$("label").css("display", "block");
$(".pseudo").val("Votre pseudo");
$(".txt").val("Tapez votre message");
$(".pseudo").css("display", "block");


$(".chatEntry button").click(function(){
	$("#displayTxtArea").append("<p><span class='name badge'>" +
	$(this).siblings(".pseudo").val() +" </span>"
	+ $(this).siblings(".txt").val() + "</p>");
	if($(this).siblings(".txt").val() == bot.question){
	 	$("#displayTxtArea").append("<p><span class='badge'>Bot</span>"+bot.response+"</p>");
	}
});

$("#user1 button").click(function(){
	$("#displayTxtArea").find(".name").css("background-color", "green");
});

$("#user2 button").click(function(){
	$("#displayTxtArea").find(".name").css("background-color", "pink");
});















