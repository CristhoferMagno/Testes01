window.onload = function(){
	carregarPoltronas();
}

var poltronas = [false,true,false,true,true,true,false,true,false];

function carregarPoltronas(){
	var imagens = document.getElementsByTagName("img");
	for (var i = 0; i < imagens.length; i++) {
		if (poltronas[i] ) {
			imagens[i].src = "imagens/disponivel.png";
		}else{
			imagens[i].src = "imagens/indisponivel.png";
		}
	}
}

function selecionarPoltrona(){
	var imagens = document.getElementsByTagName("img");
	for(var i = 0; i < poltronas.length ; i++){
		if (poltronas[i]) {
			imagens[i].src ="imagens/selecionada.png";

			var quer = confirm("Você quer essa poltrona?");
			if (quer) {
				break;
			}
			else{
				imagens[i].src = "imagens/disponivel.png";
			}
		}
	}
} 

function selecionarCasal(){
	var imagens = document.getElementsByTagName("img");
	for(var i = 0; i < poltronas.length ; i++){
		if (poltronas[i] && poltronas[i+1]) {
			imagens[i].src ="imagens/selecionada.png";
			imagens[i+1].src ="imagens/selecionada.png";
			var quer = confirm("Você quer estas poltronas?");
			if (quer) {
				break;
			}else{
				imagens[i].src = "imagens/disponivel.png";
				imagens[i+1].src = "imagens/disponivel.png";
			}
		}
	}
}
