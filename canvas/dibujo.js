var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l =0;
var yi,xf,xi,yf;
var color = "blue";


while (l<lineas) {
    yi=10+l;
    xf=10*(l+1);
    dibujarLinea("yellow",150,xf,yi,0);
    dibujarLinea("red",150,xf,yi,300);
    dibujarLinea("green",150,xf,300,0);
    dibujarLinea("blue",150,xf,300,300);   
    console.log("Linea " + l);
    l++;
}

for (l = 0; l < lineas; l++) {
    xi = 300 - (1*10);
    yf = 10*l;
    dibujarLinea("brown",0,xi,yf,0);
    console.log("Linea " + l);
}

for (l = 0; l < lineas; l++) {
    xi = 300 - (1*10);
    yf = 10*l;
    dibujarLinea("darkblue",xi,0,0,yf);
    console.log("Linea " + l);
}



function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath()
}


