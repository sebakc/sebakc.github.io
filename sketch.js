var diametro;
diametro = 100;
diametro1=200;
var incremento = 1;
var mosca;
var ventana;

//fabrica1180
function setup() {
  //crea el cambas del tamagno actual de la ventan
  createCanvas(windowWidth, windowHeight);
  mosca = loadImage("http://pacificcoastmanagement.us/carden/bugimages/fly2.png");  //cargar mosca
  ventana = loadImage("http://www.starmarkwindows.com/core/fileparse.php/104698/urlt/bay-or-bow-windows1.png"); //cargar ventana
  background(0, 255, 0);
}

function draw() {
    //dibujo elipses
  if(diametro>200) {
    incremento=incremento*-1;
  }
  else if(diametro<50) {
    incremento=incremento*-1;
  }
  //modifica los tamagnos de las esferas
  diametro=diametro+incremento;
  //elipse 2 crese en sentido inverso
  diametro1=diametro1+incremento*-1;
  estilo();
  //mouseX, mouseY sigue la posicion del mouse
  //ellipse(mouseX, mouseY, diametro, diametro);
  //ellipse(mouseX, mouseY+150, diametro1, diametro1);
  if (mouseX > width/2) {
    background(255,0,0);
    muchasElipses(100);
  }
  else {
    background(0,255,0);
    muchasElipses(10);
  }
  //dibujo elipses fin
  image(mosca, 0, 0);
}

function mosca() {


}

function estilo() {
  //background verde sirve para limpiar la traza de las esferas
  background(0, 255, 0);
  //definir el ancho
  strokeWeight(10);
  //definir el color del borde
  stroke(0,0,255,255/2);
  //definir color del relleno
  fill(255,0,0,255/2);
}

//dibuja muchas elipses
//en cualquier parte
function muchasElipses(a) {
  for (i = 0; i < a; i++) {
  noStroke();
  fill(random(255), random(255), random(255), random(255));
  ellipse(random(width), random(height), diametro, diametro);
  noStroke();
  fill(random(255), random(255), random(255), random(255));
  ellipse(random(width), random(height), diametro1, diametro1);
  }
}
