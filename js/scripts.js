$(document).ready(function(){
  $("form#quiz").submit(function(event) {
  event.preventDefault();
  var color = $("#color").val();
  var date = $("#date").val();
  var hate = $("#hate").val();



  if (color === "green" && date === "smash" || color === "green" && hate === "angry" || date === "smash" && hate === "angry"){
    $("#hulk").show();
    $("#spiderman, #batman, #nomatches").hide();
  } else if (color === "red" && date === "swing" || color === "red" && hate === "newspaper" || date === "swing" && hate === "newspaper"){
    $("#spiderman").show();
    $("#hulk, #batman, #nomatches").hide();
  } else if (color === "black" && date === "fight" || color === "black" && hate === "clowns" || date === "fight" && hate === "clowns"){
    $("#batman").show();
    $("#spiderman, #hulk, #nomatches").hide();
  } else{
    $("#nomatches").show();
  }


});

});
