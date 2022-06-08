const imagenes = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");
const flechas = document.querySelectorAll(".modal a");
//variables de estado
let rutasImg = [];//esto guardará las URL de la imágenes
let imagenActiva = 0;//un número que representa un índice de rutasImg


//abrir modal
imagenes.forEach((imagen,indice) =>{
	rutasImg.push(imagen.getAttribute("href"));
	imagen.addEventListener("click", function(evento){
		evento.preventDefault();
		imagenActiva = indice;
		imgModal.setAttribute("src",rutasImg[imagenActiva]);
		modal.classList.add("visible");
	});
});

//cerrar modal
modal.addEventListener("click", function(){
	this.classList.remove("visible");
});

for(let i = 0; i < flechas.length; i++){
	flechas[i].addEventListener("click", function(evento){
		evento.preventDefault();
		evento.stopPropagation();
		if(i == 0){//i representa la dirección ...> 0 atrás | 1 adelante
			//atrás
			imagenActiva = imagenActiva > 0 ? imagenActiva - 1 : rutasImg.length - 1;
		}else{
			//adelante
			imagenActiva = imagenActiva < rutasImg.length - 1 ? imagenActiva + 1 : 0;
		}
		imgModal.setAttribute("src",rutasImg[imagenActiva]);
	});
}
