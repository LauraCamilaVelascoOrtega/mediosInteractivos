var x=300;
var mov=1;
var y= 0;
var i=0;
var c=0;

function setup() {
createCanvas (1000,700);
 
  
  
}

function draw() {
 
  
  noStroke();
  // cielo
  //azul cielo 0,180,230 
fill(0,180-2*c,230+c/2); //azul cielo 
rect(0,0,1000,450);
 
 //sol
 fill(255-c/1.2,255-c,0); //color sol
 ellipse (750,150+8*c,150-c,150-c); //sol
 //luna llena
 fill(255,255,255,10+3.5*c);//color luna
 ellipse (250,650-y/2,30+y/16,30+y/16); //luna
 y=y+1*mov; //ecuación movimiento luna
 
 if (y >=1400) //condicional para movimiento luna
 {
   y=0;
 }
 // arena 
 fill(198-c/1.4,166-c,100-c); //color arena
 rect(0,450,1000,700); //cuadrado abajo arena
 
  noStroke();
 
 fill(198-c/1.4,166-c,100-c); //color arena
 triangle (x,450,200+x,450,100+x,300); //montaña 1
 triangle (200+x,450,400+x,450,300+x,350); //montaña 2
 triangle (400+x,450,600+x,450,500+x,300); //montaña 3
 triangle (600+x,450,800+x,450,700+x,330); //montaña 4
 
   x=x-1*mov; //ecuacion movimiento montañas
   c=c+1*mov/20; // ecuación cambio color arena
     
   if ((c>= 70)) //condicional para volver a color claro
   {
     c=c-70*mov;
   }
   
  if(x<=-800) //condicional para mover montañas una y otra vez
  {x=1000;
  }
  
  
  // vagones entre los trenes 
  
  fill (200,0,50);
  rect(65+i,500,200,150);  //vagon
  rect (200+i,560,200,20);// union entre los vagones 
  rect(300+i,500,300,150); //locomotora
  rect (300+i,400,150,100)// punto de control 
  rect (510+i,390,60,250);// chimenea 
  fill (0);//
  quad (300+i,400,320+i,370,430+i,370,450+i,400);// techo del tren 
  
  fill (128,64,0); // color marron 
  rect (490+i,370,100,30);// borde de la chimena cafe 
  
  // ruedas del tren 
  fill (255); //blanco 
  ellipse (120+i,650,60,60); // rueda 1 
  ellipse (210+i,650,60,60); // rueda 2 
  ellipse (480+i,650,60,60); // rueda 3
  ellipse (550+i,650,60,60); // rueda 4
  ellipse (360+i,630,100,100); // rueda 5
  fill(0);
  ellipse (120+i,650,30,30); // rueda 1 negra 
  ellipse (210+i,650,30,30); // rueda 2 negra
  ellipse (480+i,650,30,30); // rueda 3 negra 
  ellipse (550+i,650,30,30); // rueda 4 negra  
  ellipse (360+i,630,70,70); // rueda 5 negra 
  
  i=i+1*mov*2.5; //movimiento en x del tren
  // rectangulos del tren ventanas 
  fill(255);
  rect (90+i,530,60,70); // rectangulo 1 de izq a dere 
  rect (170+i,530,60,70); // rectangulo 2 de izq a dere 
  rect (380+i,410,40,90); // rectangulo 3 de izq a dere
  rect (325+i,410,40,90); // rectangulo 4 de izq a dere
  //ventanas negras 
  fill (76,76,76);// gris 
  triangle (90+i,530,120+i,530,90+i,600);// primera cortina de la primera ventana 
  triangle (120+i,530,150+i,530,150+i,600); // segunda cortina de la primera ventana 
  triangle (170+i,530,200+i,530,170+i,600);// primera cortina de la segunda ventana
  triangle (200+i,530,230+i,530,230+i,600); // segunda cortina de la segunda ventana
  if (i>=1065)
   {
    i= -650;
  }
   
   
}
