$(document).ready(function() {
	console.log('el documento está preparado');

	$('#generarCabecera').click(function(){

		//alert('le di clic');
		var gestion = "";
		var correoCopia =  "";
		var asunto = "";
		gestion =$('#gestion').val();
		correoCopia = chequearSeleccionados();
		asunto = generarAsunto();

		$('#para').text('Para :' + gestion);
		if(correoCopia == ""){
			$('#conCopia').text('Selecciona los destinatario de correo copia');
		}else{
			$('#conCopia').text('Con copia a  :' + correoCopia);
		}
		if (asunto != ""){
			$('#asuntoCorreo').text('Asunto: ' + asunto);
		}
		
		
		

	})
});

function chequearSeleccionados(){
	var correoCopia = "";
	if($("input:checkbox:checked").length == 0){
		alert('Debes seleccionar al menos un correo para correo copia');
	}else{

		$("input:checkbox:checked").each(function(){
			//cada elemento seleccionado
			//alert($(this).val());
			correoCopia = correoCopia + $(this).val() + (';')
			//console.log(correoCopia);
		});
	}
	return correoCopia;
};

function generarAsunto(){
	//alert("generarAsunto");
	var asunto ="";
	var changeRequest = "";
	var entrega =  "";
	var nombreProyecto = "";


	var miMovistar = "MI MOVISTAR";
	changeRequest = $('#change').val();
	entrega = $('#entrega').val();
	nombreProyecto = $('#nombreProyecto').val();
	if(changeRequest == "" || entrega == "" || nombreProyecto == "" ){

		alert('El asunto esta incompleto, chequea que no te falta ningun dato');
	}else{
		asunto = (miMovistar+ ":" + changeRequest+ ":"  + entrega+ ":"  + nombreProyecto).toUpperCase();
		return asunto;
	}

	return "";
	
	

}
