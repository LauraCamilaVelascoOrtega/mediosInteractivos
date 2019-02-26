//colores
var posXrec1 = 10;
var posYrec1 = 160;
var tamRect1 = 40;

var posXrec2 = 10;
var posYrec2 = 210;
var tamRect2 = 40;

var posXrec3 = 10;
var posYrec3 = 260;
var tamRect3 = 40;

var posXrec4 = 10;
var posYrec4 = 310;
var tamRect4 = 40;

var posXrec5 = 10;
var posYrec5 = 360;
var tamRect5 = 40;

var posXrec6 = 10;
var posYrec6 = 410;
var tamRect6 = 40;

var posXrec7 = 10;
var posYrec7 = 460;
var tamRect7 = 40;

var posXrec8 = 10;
var posYrec8 = 510;
var tamRect8 = 40;

var posXrec9 = 10;
var posYrec9= 560;
var tamRect9= 40;

var posXrec10 = 10;
var posYrec10= 610;
var tamRect10= 40;



// figuras
// muñeco de nieve 
var posXeli1= 60;
var posYeli1 = 85;
var anchoeli1 = 45;
var altoeli1= 45;
var posXline1= 45;
var posYline1= 60;
var pos2Xline1= 20;
var pos2Yline1=30;

//Dona

var posxelidona1 =150;
var posyelidona1 =65;
var anchodona1= 45;
var altodona1 = 40;
var posxelidona2 = 150;
var posyelidona2 =65;
var anchodona2= 15;
var altodona2 = 15;


//flecha izquierda
var posXrecflecha= 248;
var posYrecflecha= 50;
var anchorecflecha = 60;
var altorecflecha = 20;
var punto1trianx = 220; 
var punto1triany = 60;
var punto2trianx = 250;
var punto2triany =40;
var punto3trianx= 250;
var punto3triany = 80;


//flecha derecha
var posXrecflecha2= 330;
var posYrecflecha2= 50;
var anchorecflecha2 = 60;
var altorecflecha2 = 20;
var punto1trianx2 = 420; 
var punto1triany2 = 60;
var punto2trianx2 = 390;
var punto2triany2 =40;
var punto3trianx2= 390;
var punto3triany2 = 80;

//pacman
var posXpacman =  470;
var posYpacman =  60; 
var anchopacman = 40;
var altopacman = 40;
var iniciopacman = 0.52;
var finalpacman= 5.76;
var elixpacman= 475; 
var eliypacman= 50;
var anchoelipacman= 5;
var altoelipacman= 5;

//Pentagono
var punta1x= 540;
var punta1y= 40;
var punta2x= 560;
var punta2y= 60;
var punta3x= 550;
var punta3y= 80;
var punta4x= 530;
var punta4y= 80;
var punta5x= 520;
var punta5y= 60;

//Estrella
var punta1esx= 630;
var punta1esy= 30;
var medio1esx= 640;
var medio1exy= 50;
var punta2esx= 660;
var punta2esy= 50;
var medio2esx= 640;
var medio2esy= 65;
var punta3esx= 650;
var punta3esy= 90;
var medio3esx= 630;
var medio3esy= 70;
var punta4esx= 610;
var punta4esy= 90;
var medio4esx= 620;
var medio4esy= 65;
var punta5esx= 600;
var punta5esy= 50;
var medio5esx= 620;
var medio5esy= 50;

//fantasma
var posxarc= 730;
var posyarc= 80;
var anchofan= 55;
var altofan= 100;
var inifan= 3.14;
var finfan= 6.28;
var posx1tri= 700;
var posy1tri= 81;
var posx2tri= 715;
var posy2tri= 65;
var posx3tri= 730;
var posy3tri= 80;
var elixfan= 722;
var eliyfan= 50;
var ojofan= 10;

//Robot 
var rec1x= 800;
var rec1y= 20;
var tam1= 80;
var rec2y=40;
var tam2=10;


// martillo 
var cabezax= 950;
var cabezay=30;
var anchocab= 50;
var altocab= 20;
var cuerpox=965;
var cuerpoy= 50;
var anchocu= 20;
var altocu= 50;


//Borrar
var posXrec11 = 10;
var posYrec11= 660;
var tamRec11= 40;



var colSel = 0;
var herSel = 0; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
  noStroke();

  // Imagenes Botones colores
  stroke(0);
  fill(255, 0, 100); //Rojo
  rect(posXrec1, posYrec1, tamRect1, tamRect1);
  fill(114, 229, 166); //Verde aguamarina 
  rect(posXrec2, posYrec2, tamRect2, tamRect2);
  fill(249,124,166); // Rosado
  rect(posXrec3, posYrec3, tamRect3, tamRect3);
  fill(45,124,240); // Azul 
  rect(posXrec4, posYrec4, tamRect4, tamRect4);
  fill(114,108,166); //Lila
  rect (posXrec5,posYrec5, tamRect5, tamRect5);
  fill(13,246,108); //Verde
  rect (posXrec6,posYrec6, tamRect6, tamRect6);
  fill(254,246,108); //Amarillo
  rect (posXrec7,posYrec7, tamRect7, tamRect7);
  fill(74,90,106); //Gris
  rect (posXrec8,posYrec8, tamRect8, tamRect8);
  fill(255,139,2); //Naranja
  rect (posXrec9,posYrec9, tamRect9, tamRect9);
  fill(252,227,178); //Piel
  rect (posXrec10,posYrec10, tamRect10, tamRect10);
  //Imagen boton borrar
fill (255,255,255); //blanco
rect (posXrec11, posYrec11, tamRec11, tamRec11);
    
  
  // Imagenes figuras
  //muñeco de nieve
  fill (255);
  stroke (0);
  ellipse( posXeli1,  posYeli1, anchoeli1, altoeli1);
  ellipse( posXeli1,  posYeli1-25, anchoeli1-10, altoeli1-10);
  ellipse( posXeli1,  posYeli1-45, anchoeli1-15, altoeli1-15);
  line (posXline1,posYline1,pos2Xline1, pos2Yline1);
  line (posXline1+30,posYline1,pos2Xline1+75, pos2Yline1);
  
  //dona 
  ellipse (posxelidona1, posyelidona1, anchodona1, altodona1);
  fill(100);
  ellipse (posxelidona2, posyelidona2, anchodona2, altodona2);
  
  //flecha izquierda
  fill (255);
  rect (posXrecflecha, posYrecflecha, anchorecflecha, altorecflecha);
  triangle (punto1trianx, punto1triany,punto2trianx, punto2triany, punto3trianx, punto3triany);
  
  //flecha derecha
  rect (posXrecflecha2, posYrecflecha2, anchorecflecha2, altorecflecha2);
  triangle (punto1trianx2, punto1triany2,punto2trianx2, punto2triany2, punto3trianx2, punto3triany2);
  
  //pacman
  arc (posXpacman, posYpacman, anchopacman, altopacman, iniciopacman, finalpacman, PIE);
  ellipse (elixpacman, eliypacman, anchoelipacman, altoelipacman);
    
  //Pentagono
beginShape();
vertex(punta1x,punta1y);
vertex(punta2x,punta2y);
vertex(punta3x,punta3y);
vertex(punta4x,punta4y);
vertex(punta5x,punta5y);
endShape(CLOSE)
  
//estrella
beginShape();
vertex(punta1esx, punta1esy);
vertex(medio1esx, medio1exy);
vertex(punta2esx, punta2esy);
vertex(medio2esx, medio2esy);
vertex(punta3esx, punta3esy);
vertex(medio3esx, medio3esy);
vertex(punta4esx, punta4esy);
vertex(medio4esx, medio4esy);
vertex(punta5esx, punta5esy);
vertex(medio5esx, medio5esy);
endShape(CLOSE)
//fantasma
arc(posxarc, posyarc, anchofan,altofan,inifan, finfan, OPEN);
fill(100);
noStroke();
triangle (posx1tri,posy1tri,posx2tri, posy2tri, posx3tri,posy3tri);
triangle (posx1tri+30,posy1tri,posx2tri+30, posy2tri, posx3tri+30,posy3tri);
stroke(0);
ellipse (elixfan, eliyfan, ojofan, ojofan);
ellipse (elixfan+16, eliyfan, ojofan, ojofan);
  fill (255);
//cabeza robot
rect(rec1x,rec1y,tam1,tam1);
fill(100);
rect(rec1x+15,rec1y+45,tam1-30,tam2+10);
rect(rec1x+20,rec2y,tam2,tam2);
rect(rec1x+50,rec2y,tam2,tam2);

//martillo
fill(255);
rect(cabezax,cabezay,anchocab,altocab);
rect(cuerpox,cuerpoy,anchocu,altocu);
    // Seleccion Color
  if (colSel == 1) { 
    fill(255, 0, 100);// Rojo
    stroke(0);
  }
  else if (colSel == 2) { 
    fill(114, 229, 166); //Verde aguamarina
    stroke(0);
  }
  else if (colSel == 3) { 
    fill(249,124,166); // Rosado
    stroke(0);
  }
  else if (colSel == 4) { 
    fill(45,124,240); // Azul 
    stroke(0);
  }
  else if (colSel == 5) { 
    fill(114,108,166); //Lila
    stroke(0);
  }
  else if (colSel == 6) { 
    fill(13,246,108); //Verde
    stroke(0);
  }
  else if (colSel == 7) { 
    fill(254,246,108); //Amarillo
    stroke(0);
  }
  else if (colSel == 8) { 
    fill(74,90,106); //Gris
    stroke(0);
  }
  else if (colSel == 9) { 
    fill(255,139,2); //Naranja
    stroke(0);
  }
  else if (colSel == 10) { 
    fill(252,227,178); //Piel
    stroke(0);
  }
//borrar
 if (colSel==11) {
background (100);
 
 }
 


  if (mouseIsPressed == true) {
    // Seleccion Herramienta
    //muñeco de nieve
    if (herSel ==1) {
      ellipse(mouseX, mouseY, 25,25);
      ellipse (mouseX, mouseY-15, 15,15);
      ellipse (mouseX, mouseY-25, 10,10);
      line (mouseX-7, mouseY-15, mouseX-7-10,mouseY-15-15 );
      line (mouseX+5, mouseY-15, mouseX-7+24,mouseY-15-15 );
    }
    //dona
    else if (herSel ==2) {
      ellipse (mouseX, mouseY, 45,40);
      fill(100);
      ellipse (mouseX, mouseY, 15,15);
           
    }
    //flecha izquierda
    else if (herSel ==3) {
      rect (mouseX, mouseY, 50,20);
      triangle (mouseX-28,mouseY+10,mouseX+2, mouseY-10,mouseX +2, mouseY+30); 
        
    }
    //flecha derecha
    else if(herSel ==4) {
      rect (mouseX, mouseY, 50,20);
      triangle ( mouseX+80, mouseY+10,mouseX+50, mouseY-10, mouseX+50 , mouseY+30);
        
    }
    
    //pacman 
    else if (herSel==5) {
      arc (mouseX, mouseY,40,40,0.52,5.76,PIE);
      ellipse(mouseX+5,mouseY-10,5,5)
            
    }
//pentagono
else if( herSel==6) {
beginShape();
vertex(mouseX,mouseY);
vertex(mouseX+20,mouseY+20);
vertex(mouseX+10,mouseY+40);
vertex(mouseX-10,mouseY+40);
vertex(mouseX-20,mouseY+20);
endShape(CLOSE)
}
//estrella
else if(herSel==7) {
beginShape();
vertex(mouseX,mouseY);
vertex(mouseX+10,mouseY+20);
vertex(mouseX+30,mouseY+20);
vertex(mouseX+10,mouseY+35);
vertex(mouseX+20,mouseY+60);
vertex(mouseX,mouseY+40);
vertex(mouseX-20,mouseY+60);
vertex(mouseX-10,mouseY+35);
vertex(mouseX-30,mouseY+20);
vertex(mouseX-10,mouseY+20);
endShape(CLOSE)
}
// fantasma 
else if( herSel==8) {
arc(mouseX,mouseY,55,100,3.14,6.28,OPEN);
fill(100);
noStroke();
triangle( mouseX-30,mouseY, mouseX-15,mouseY-15,mouseX,mouseY);
triangle( mouseX,mouseY, mouseX+15,mouseY-15,mouseX+30,mouseY);
stroke(0);
ellipse(mouseX-8,mouseY-30,10,10);
ellipse(mouseX+8,mouseY-30,10,10);
}
// cabeza robot
else if (herSel==9) {

rect (mouseX, mouseY,80,80);
fill(100);
rect(mouseX+15, mouseY+45,50,20);
rect(mouseX+20, mouseY+20, 10,10);
rect(mouseX+50, mouseY+20, 10,10);
}
//martillo
else if(herSel==10) {
rect(mouseX, mouseY,50,20);
rect(mouseX +15, mouseY+20, 20,50);
}
//Borrar
if (mouseX > posXrec11 
&& mouseX< posXrec11+tamRec11
&& mouseY > posYrec11
&& mouseY < posYrec11+tamRec11)
{
colSel=11;
background(100);
}
    // Zona Sensible de los botones
    //colores
//color rojo
    if (mouseX > posXrec1 
      && mouseX < posXrec1 + tamRect1
      && mouseY > posYrec1
      && mouseY < posYrec1 + tamRect1) {
      
      colSel = 1;
    }
//color verde aguamarina
    if (mouseX > posXrec2 
      && mouseX < posXrec2 + tamRect2
      && mouseY > posYrec2
      && mouseY < posYrec2 + tamRect2) {
     
      colSel = 2;
    }
    //color fucsia
     if (mouseX > posXrec3 
      && mouseX < posXrec3 + tamRect3
      && mouseY > posYrec3
      && mouseY < posYrec3+ tamRect3) {
      
      colSel = 3;
    }
    //color azul
     if (mouseX > posXrec4
      && mouseX < posXrec4 + tamRect4
      && mouseY > posYrec4
      && mouseY < posYrec4 + tamRect4) {
      
      colSel = 4;
    }
    //color morado
     if (mouseX > posXrec5 
      && mouseX < posXrec5 + tamRect5
      && mouseY > posYrec5
      && mouseY < posYrec5 + tamRect5) {
     
      colSel = 5;
    }
    //color verde
     if (mouseX > posXrec6 
      && mouseX < posXrec6 + tamRect6
      && mouseY > posYrec6
      && mouseY < posYrec6 + tamRect6) {
    
      colSel = 6;
    }
    //color amarillo
     if (mouseX > posXrec7
      && mouseX < posXrec7 + tamRect7
      && mouseY > posYrec7
      && mouseY < posYrec7 + tamRect7) {
      
      colSel = 7;
    }
    
    //color gris
     if (mouseX > posXrec8
      && mouseX < posXrec8 + tamRect8
      && mouseY > posYrec8
      && mouseY < posYrec8 + tamRect8) {
     
      colSel = 8;
    }
    
    
    //color naranja
     if (mouseX > posXrec9
      && mouseX < posXrec9 + tamRect9
      && mouseY > posYrec9
      && mouseY < posYrec9 + tamRect9) {
 
      colSel = 9;
    }
    
    
    //color piel
     if (mouseX > posXrec10
      && mouseX < posXrec10 + tamRect10
      && mouseY > posYrec10
      && mouseY < posYrec10 + tamRect10) {
     
      colSel = 10;
    }
    
       
   //muñeco de nieve
    if (mouseX > posXeli1 - anchoeli1 
    && mouseX < posXeli1 + anchoeli1
    && mouseY > posYeli1 - altoeli1
    && mouseY < posYeli1 + altoeli1)
    {
     herSel =1;
    }
    //dona
    if (mouseX > posxelidona1 - anchodona1/2
        && mouseX < posxelidona1 + anchodona1/2
        && mouseY > posyelidona1 - altodona1/2
        && mouseY < posyelidona1 + altodona1/2)
    {
      herSel =2;
    }
    //flecha izquierda
    if (mouseX > punto1trianx 
        && mouseX < posXrecflecha+anchorecflecha
        && mouseY > punto2triany 
        && mouseY < punto3triany)
    {
      
      herSel=3;
    }
//flecha derecha
      if (mouseX < punto1trianx2 
        && mouseX > posXrecflecha2
        && mouseY > punto2triany2 
        && mouseY < punto3triany2)
    {
      
      herSel=4;
    }
//pacman
    if (mouseX > posXpacman-anchopacman/2
        && mouseX < posXpacman +anchopacman/2
        && mouseY > posYpacman -altopacman/2
        && mouseY < posYpacman + altopacman/2)
    {
      herSel=5;
    }
//pentagono    
if( mouseX > punta5x
&& mouseX < punta2x
&& mouseY > punta1y
&& mouseY < punta3y)
{
herSel=6;
}
//estrella 
if( mouseX > punta5esx 
&& mouseX < punta2esx
&& mouseY > punta1esy
&& mouseY < punta3esy)
{
herSel=7;
}
//fantasma 
if (mouseX > posx1tri
&& mouseX < posx3tri
&& mouseY > posyarc -altofan/2
&& mouseY < posyarc + altofan/2)
{
herSel=8;
}
//cabeza robot
if (mouseX> rec1x
&& mouseX< rec1x+tam1
&& mouseY > rec1y
&& mouseY < rec1y + tam1)
{
herSel=9;
}
//martillo 
if( mouseX > cabezax
&& mouseX < cabezax+anchocab
&& mouseY >cabezay
&& mouseY < cabezay+altocu)
{
herSel=10;
}
  }
}
