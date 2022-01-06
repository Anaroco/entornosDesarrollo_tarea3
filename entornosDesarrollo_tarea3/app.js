var edad = prompt("Introduce tu edad");

if (Number(edad) == edad) {

	if (edad >= 18 && edad<=75) {
	   document.write("Puedes conducir");
	}

    else {
       document.write("No puedes conducir");
    }
}

else {
    document.write("Introduce un número válido");
}
