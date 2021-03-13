var inicio = 0;
carrusel();
function carrusel(){
	var i;
	var x = document.getElementsByClassName("fotosGal");
	for (var i = 0; i < x.length ; i++) {
		x[i].style.display = "none";
	}
	inicio++;
	if (inicio > x.length) {
		inicio = 1;
	}
	x[inicio - 1].style.display = "flex";
	setTimeout(carrusel,1800);
}