//mon Bot
var bot = {
	"question": "le gras",
	"response": "c'est la vie"
};

var name = "";
var msg ="";

function addMsg(username, newMsg){
	function message(){
		$("#displayTxtArea").append("<p><span class='name badge'>" + username
		+ "</span>" + newMsg + "</p>");
	};
	message();
};

function userColor(username){
	if(username.attr('name') == "pseudo1"){
		username.siblings(".name").css("background-color", "green");
	}
}

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
	name = $(this).siblings(".pseudo").val();
	msg = $(this).siblings(".txt").val();
	addMsg(name, msg);
	if($(this).parents().attr('id') == "user1"){
		$("#displayTxtArea").find(".name").css("background-color", "green");
	} else if($(this).parents().attr('id') == "user2"){
		$("#displayTxtArea").find(".name").css("background-color", "pink");
	}
	userColor(name);
});



/*$("#user1 button").click(function(){
	$("#displayTxtArea").find(".name").css("background-color", "green");
});*/

$("#user2 button").click(function(){
	$("#displayTxtArea").find(".name").css("background-color", "pink");
});















