$(document).ready(principal);

var contadorUno= 1;

function principal(){
	$('.enlace').click(function(){
		$(this).children('ul').animate({
			left:'0%'
		})
		$('.menuDesplegable').css('display', ' none');
		})

		$('.primer').click(function(){
			$('.menuE').animate({
				left:'-100%'
			})
			$('.menuDesplegable').css('display', ' block');

		})
	$('ul').click(function(p){
		p.stopPropagation();
	})
	
		
	}




