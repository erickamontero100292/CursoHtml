$(document).ready(function() {
	console.log('el documento está preparado');

	var gestion =$('#gestion').val();
	$('#para').append("<p>Para: "+ gestion +"</p>");
	console.log(gestion);
	countChecked();
	$( "input[type=checkbox]" ).on( "click", countChecked );
	$("input:checkbox:checked").each(function(){
	//cada elemento seleccionado
		alert($(this).val());
});

});

var countChecked = function() {
var n = $( "input:checked" ).length;
var m = $( "input:checked" );
  console.log(m);
  $( "div" ).text( n + (n === 1 ? " is" : " are") + " checked!" );
};

 
