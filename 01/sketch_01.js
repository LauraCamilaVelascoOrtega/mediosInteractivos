function setup() {

  
  createCanvas (1000, 1000);

  // cuadrado verde del fondo 
  fill( 77, 73, 60);// verde
  noStroke ();
  quad(165, 450, 550, 230, 760, 560, 485, 817); // izq superior, derecha arriba, derecha abajo, centro abajo 
 
 
 // triangulo grande de encima, lado isquierdo superior mas claro rojo

  fill (148, 64, 42,200); // rojo 

  triangle (67, 368, 180, 550, 350, 410); // artrriba, izquierda , derecha
 
 // arco blanco debajo del triangulo amarillo 
 fill (255,255,255); //blanco
 arc (375,273,175,175,5,1.74); //ARCO BLANCO 
 
 //figura que da el triangulo bebe que choca con el azul en la parte de arriba en el amarillo
 fill (148, 64, 42); // rojo 
 quad (295, 452,320,365,405,310,350,400); //izquierda abajo izquierrda arriba derecha arriba derecha abajo 
 
 fill (93,89,124); //azul morado 
 arc (405,310,120,180,5.2,5.82); //arco pequeño zona 4-2
 
 //linea roja zona 4-2
 strokeWeight (3);
 stroke (148, 64, 42,200);
 line(420,250,450,196);
 
  //triangulo amarillo grande

  fill (215, 191, 94,200); // amarillo

  noStroke ();

  triangle (120, 57, 440, 344, 295, 452); //arriba, derecha, izq


  // cuadrado de adelante roja, mas opaca negro con transparencia  

  //fill (55, 11, 15, 100);

  //quad(165, 450, 400, 309, 337, 417, 223, 517); // izqu arriba, derecha arriba, derecha abajo, izq abajo 



  //figura negra parece un pajaro 

  stroke (0, 0, 0);

  fill (0, 0, 0); //negro

  beginShape();
  vertex(260, 410); // primer punto pico de arriba del pajaro 
  vertex (295, 452); // punto final del pico en la boca 
  vertex (300, 383); // punto del cuello 
  vertex (403, 520); //estomago parte izquierda 
  vertex (560, 510); // estomago parte derecha
  vertex (960, 870); // punta inFerior derecha 
  vertex (570, 470); // punto superior donde inica la cola larga 
  vertex (510, 430); // punta de toda la mitad parece la cola arriba 
  vertex (450, 470); // cintura del pajaro 
  vertex (290, 310); // parte de arriba de la cabeza 
  endShape ();


  //figura flecha que cruza todo el pajaro en negro parte 1 derecha 
  quad (690, 340, 980, 80, 880, 190, 680, 370); //( izqu arriba, rede arriba, dere abajo, izq abajo 
  
   //arcos pequeños colgantes cafes 
   noFill ();
      stroke(116,86,72);
      strokeWeight(7);
     arc (126,857,80,80,5.5, HALF_PI + QUARTER_PI); // primero de izquierda a derecha 
     arc (190,800,95,95,5.5, HALF_PI + QUARTER_PI); // segundo de izquierda a derecha 
     arc (257,740,80,80,5.5, HALF_PI + QUARTER_PI); // tercero de izquierda a derecha 
     arc (320,685,90,90,5.5, HALF_PI + QUARTER_PI); // cuarto de izquierda a derecha 
     
     
     fill (206,199,171,180); // color semi beige el que esta por dentro de los soguientes 3 arcos
     arc (390,620,90,90,5.5, HALF_PI + QUARTER_PI); // qwuinto de izquierda a derecha
     arc (450,568,60,60,5.5, HALF_PI + QUARTER_PI); // sexto de izquierda a derecha 
     arc (490,530,40,40,5.5, HALF_PI + QUARTER_PI); // septimo  de izquierda a derecha 
     arc (510,518,20,20,5.5, HALF_PI + QUARTER_PI); // octavo de izquierda a derecha 
     
     //arcos del lado derecho del palo donde esta el pajaro 
     
     arc (580,451,33,33,5.5, HALF_PI + QUARTER_PI); // octavo de izquierda a derecha 
     arc (600,429,30,30,5.5, HALF_PI + QUARTER_PI); // octavo de izquierda a derecha 
     
strokeWeight (1);
  //figura flecha que cruza todo el pajaro parte dos hasta el circulo, parte izquierda 
  fill (0,0,0);
  noStroke ();
  quad(55, 885, 600, 400, 630, 410, 70, 910);


  // ceja naranja arriba1

  noStroke ();
  fill(194, 76, 49); //color naranja 
  beginShape();
  vertex (458, 113); //izq punta
  vertex (540, 30); //punta arriba
  vertex (622, 96); //dere arriba
  vertex (602, 113); //dere abajo
  vertex (555, 85); //centro
  endShape();

  // ceja naranja arriba2
  fill(194, 76, 49); //color naranja 
  triangle(633, 108, 705, 175, 620, 125); //dere arriba esquina izq abajo

  // puntilla negra arriba1

  fill(0, 0, 0);
  quad(540, 175, 602, 113, 620, 125, 566, 191); //izq arriba dere arriba dere abajo izq abajo

  // puntilla negra arriba2 esquina

  triangle(622, 96, 705, 5, 633, 108); // izq arriba, punta dere, izq abajo

  // ajedrez negro y blanco 
  // cuadrado grande negro que encierra 
  stroke (0, 0, 0);
  quad(645, 175, 680, 185, 665, 235, 632, 226); //isquierda arriba, derecha arriba, derecha abajo, izq abajo
  // cuadrados bebes blancos 
  fill (255, 255, 255);

 
  //1
  quad(644,175,658,179,655,190,642,188); // arriba izquierda 
  //2
  quad(670,183,680,185,675,198,665,195);// arriba derechA
  //3
 quad(655,190,665,195,660,204,650,201);// arriba derechA
  //4
 quad(639,198,650,201,646,214,635,211); // arriba izquierda 
  //5
quad(660,204,674,208,670,220,656,215);// arriba derechA
  //6
  
quad(646,214,656,215,652,232,643,230);// arriba derechA 
  //triangulos regados por todo el centro 
  
  fill (255, 255, 255); // blanco 
  quad (350, 508, 389, 500, 397, 510, 360, 530); // izq arriba, dere arriba, dere abajo, izq abajo
  fill(210, 173, 83);
  noStroke ();
  triangle(389, 501, 445, 485, 397, 510); // triangulo amarillo dentro del pajaro 
  fill (0,0,0);
  ellipse (375,513,10);
  
  stroke(0,0,0);
  fill (242,215,64);
  arc(340,520,40,40,1.2, 4.3,PIE); // semicirculo amarillo al lado del pajaro zona 3-5
  //triangulo zona 4-4 al lado de amarillo grande
  fill(200, 202, 178);
  triangle (420, 370, 435, 410, 411, 410); //arriba, derecha, izquierda
  
  //semocirculo debajo de el triangulo anterior 
  fill (234,231,222);
  stroke (145,113,66);
  arc(425,420,30,19,0,3.1416);
  

  // triangulo que se encuentra en la zona 5-4 entre intento de circulo y el pajaro 
  
  triangle (530,380,610,460,600,470); //esquina derecha arriba izquierda abajo 
     // mini quad dentro de el anterior triangulo color dorado
    fill(170, 142,80); // 
    noStroke ();
   quad (566,428,573,423,593.5,443,585,451);  //izq arriba,derecha arriba, derecha abajo, izq abajo 
 
 // arco blanco con borde azul de corona del anterior triangulo ubicacion 6-4
 fill (255,255,255); // blanco
 stroke (0,174,239);
 arc (610,471,20,20,5.236,2.5708, CHORD);
 
   //cuadrado negro arriba del pajaro 
   
   fill (0,0,0);
   noStroke ();
   quad (465,385,480,390,475,405,460,400); //arriba , derecha, abajo, izq 
   
  //arco grandote lado derecho que se cruza con el triangulo, es negro lado izquierdo
   fill (255,255,255); //blanco
   stroke (0,0,0)
  strokeWeight(25);
  arc(610,340,140, 140 ,5,4.9);
  
  // punto rojo en el centro del circulo anterior 
  stroke (122,40,53); //rojo 
  noFill (0,0,0); 
  point (610,340,30,30); 
 
 
 // arco rojo que esta en la parte de  arriba solo parece lina de tro del circulo grandote entre los dos triangulos 
 stroke (181,62,53);// rojo
   strokeWeight(5)
  arc(610,340,110,110,3.1,4.9)
 
 
 
   //trianglo que lo atravieza en la parte de abajo de varios colores  zona6-4
   noStroke();
   fill (255,255,255);
   strokeWeight(1)
   triangle (650,445,600,360,670,430); //abajo izquierda, punta arriba, abajo derecha 
   // decoraciones por dentro del triangulo anterior 
   //lineas rojas 
   stroke (181,62,53);// rojo
   strokeWeight(2)
   line (646,439,665,425);// izq, derrecha linea de mas abajo del triangulo 
    strokeWeight(8)
  line (634,411,642,406);// linea que cruza con el arco negro
  noStroke ();
  fill (0,0,0);
    quad (609,377,614,375,620,380,612,386); //arriba izq, arriba dere, anajo dere, abajo izq
    // dos lineas pasan por todo el circulo negro 
    // primera linea y la mas delgada 
    stroke (0,0,0);// negro
    strokeWeight(1)
    line (540,430,700,230); //izquierrda abajo derecha arriba 
    noFill ();
    stroke (181,62,53);// rojo
    arc (700,230,20,20,3.4,7.4); // arco donde finaliza la linea 
    
    // segunda linea mas gruesa de abajo a arriba 
    strokeWeight(3)
    stroke (0,0,0);
    line (600,320,490,200); 
    stroke (181,62,53);// rojo
    arc (490,200,25,25,2.3,6); 
    
    
 //triangulo blanco que tiene una linea roja y cuadro negro que cruza de arriba a abjo el circulo grnade zona 6-2
  noStroke ();
  fill (255,255,255);
   triangle ( 655, 245, 630, 229, 616,322); //izquierda arriba, derecha abajo , punta 
   
   fill (181,62,53);// rojo
   quad (625,264,642,270,640,278,624,274); //izq arriba, dre arriba, dere abajo, izq abajo
   fill (0,0,0)
   quad (620,294,629,297,627,303,619,300); //izq arriba, dre arriba, dere abajo, izq abajo
  
   // triangulo sobre el pajaro negro que tiene lineas y cuadrados rojos y cruza el arco negro uicacion 6-4
  strokeWeight(1)
   fill (255,255,255);
   triangle (460,432,585,330,475,448); //izquierda arriba, punta , derecha abajo 
   
   //punta negra que esta en la punta del triangulo blanco que atravieza a la curva- circulo
  fill (0,0,0);
   triangle (570,343,585,330,571,346); // izqu arriba,punta derecha abaj
   
   //liena negra que cruza el triangulo anterior
  stroke(0,0,0);
  //strokeWeigh(5);
   line(469,423,482,439);
   
 //liena roja que cruza el triangulo anterior
  stroke(250,0,0);
  //strokeWeigh(5);
   line(480,415,492,429);
   
   // cuadrados que esta en todo el triangulo 
   stroke(250,0,0);
  strokeWeight(2);
   line(496,403,506,412); //arriba y anabo- primera linea izquierda a derecha 
  line(500,402,509,410); //arriba y anajo- primera linea izquierda a derecha 
    strokeWeight(1);
   line (496,409,506,402); //lina de arriba de izquierda a derecha esta sbre la segunda linea 
    line (498,412,509,404); //lina de abajo de izquierda a derecha esta debajo de la anterior 
   noFill();
    
   quad(493,406,502,399,512,409,503,416); //izquierda arriba, derecha arriba, derercha abajo, izquierda abajo 
 
    //cuadrado que es rojo que va luego de la cuadricula roja dentro del triangulo que cruza la curva circulo
   fill(168,85,73); //rojo cafe 
   noStroke();
   quad(534,371,549,360, 554,365,540,379); // izquierda arriba, derecha arriba, derecha abajo, izquierda abajo
   
  // corona roja entre el pajaro y los dos triangulos 
  fill (167,81,58);
  noStroke ();
   beginShape ();
   vertex (510,420); //esquina 1 arriba
   vertex (520,422); //valle 1 abajo 
   vertex (523,410); //esquina 2  mitad arriba 
   vertex (533,415); //valle 2 mitad abajo 
   vertex (535,404);  //esquina 3 arriba
   vertex (544,413); //derecha abajo 
   vertex (520,430); //izquierda abajo
   endShape ();

  //ellipse();
  noFill();
  stroke(0,0,0);
  strokeWeight(1);
  //arc(120, 63, 200, 100, 0, HALF_PI)
  
  // arcos entre el triangulo rojo y amarillo 
  arc(210,350,120,120,2.6,4.95); // arco1 entre triangulo rojo y amarillo (pequeño)
  arc(210,350,145,150,2.74,4.8); // arco2 entre triangulo rojo y amarillo
  // lienas que atravieza estos dos arcos 
 noFill ();
  stroke (0,0,0);
  
  line (120,320,170,340);// izquierda a derecha y desde arriba a abajo en los 3 casos 
 line (140,284,185,325);// izquierda a derecha y desde arriba a abajo en los 3 casos 
 line (170,260,200,310);// izquierda a derecha y desde arriba a abajo en los 3 casos


  //Circulo rojo- rosado arriba derecho del triangulo grande amarillo 
  fill (172,49,66);
  noStroke ();
  ellipse (370,90,20.1);
  
   
  //Primera curva de abajo a arriba de las B o M que salen del triangulo amarillo
  noFill();
  stroke(255,102,0,0);
  line(250,315,340,280);
  line(330,220,360,200);
  stroke(0,0,0);
  bezier(250,315,340,280,330,220,360,200);
  
  //arco que la compone
  noFill();
  stroke(0,0,0);
  arc(361,205,12,9.7,4.35,7.5); //primer arco
  arc(364.5,214,10.5,8.5,1.57,4.2); //segundo arco
  line(364.5,218,362,223); //linea final 
  
  //Segunda curva de abajo a arriba de las B o M que salen del triangulo amarillo
  noFill();
  stroke(255,102,0,0);
  line(260,301,330,265);
  line(315,190,375,170);
  stroke(0,0,0);
  bezier(260,301,330,265,315,190,375,170);
  
  //arco que la compone
  noFill();
  stroke(0,0,0);
  arc(375,175,15,10.6,4.75,7.5); //primer arco
  arc(376.5,183,10,6,1.2,4.6); //segundo arco
  arc(376.5,190,10,8,5,1); //tercer arco
  
    
  //tercera curva de abajo a arriba de las B o M que salen del triangulo amarillo
  noFill();
  stroke(255,102,0,0);
  line(265,280,315,260);
  line(350,90,395,130);
  stroke(0,0,0);
  bezier(265,280,315,260,350,90,395,130);
  
  //arco que la compone
  noFill();
  stroke(0,0,0);
  arc(391,134,12,10,5.5,7.5); //primer arco
  arc(393.5,143.5,17,8.5,1.2,4.5); //segundo arco
  arc(393,152,17,9,5,0.4); //tercer arco
  line(399,155,395,160); //linea final
     
     // arcos grandes que estan sobre el triagulo grande amarillo 
  stroke (0,0,0);
  arc (590,225,600,595,2.9,3.8); // grande 
  arc (595,255,590,585,3,3.7); // pequeña 

  //figura de abajo grande de 4 puntos color cafe amarillo
  fill (187,151,82,200); //  color semi cafe amarillo
  noStroke ();
  quad (430,690,560,580,700,730,430,960); // izquierdo arriba, derecha arriba, derecha abajo, izquierda abajo
  // cacahuates por dentro de la figura anterior cafe 
   noFill();
   strokeWeight(27);
  stroke (219,214,179); // color beige
 arc (490,740,60,60,1.9,4.1); //cacahuate 1  zonas 4-7 
 //puntos rojos dentro
   noFill ();
   stroke(184,102,67); //rojo cafe 
    strokeWeight(9);
   point (470,710); // punto de arriba 1 
   point (460,740); // punto de mitad 2
   point (473,770); // punto de abajo 3

 strokeWeight(26);
 stroke (219,214,179); // beige 
 arc (580,670,60,60,1.9,4.1); //cacahuate 2  zonas 5-6
 //puntos rojos dentro
   noFill ();
   stroke(184,102,67); //rojo cafe 
    strokeWeight(9);
   point (560,643); // punto de arriba 1 
   point (550,665); // punto de medio 2
   point ( 556,686); // punto de medio 3
   point (570,702); // punto de abajo 4
   
 strokeWeight(22);
 stroke (219,214,179); // beige 
 arc (630,750,33,33,1.9,4.1); //cacahuate 3  zonas 6-7
 //puntos rojos dentro
   noFill ();
   stroke(184,102,67); //rojo cafe 
    strokeWeight(9);
  point (620,740); // punto de arriba 1 
  point (625,767); // punto de arriba 2

 strokeWeight(27);
 stroke (219,214,179); // beige 
 arc (550,790,60,60,1.9,4.1); //cacahuate 4  zonas 5-7
 //puntos rojos dentro
   noFill ();
   stroke(184,102,67); //rojo cafe 
    strokeWeight(9);
 
   point (530,770); // punto de arriba 1 
   point (520,795); // punto de arriba 2
   point (540,820); // punto de arriba 3

 strokeWeight(17);
 stroke (219,214,179); // beige 
 arc (490,860,23,23,1.9,4.1); //cacahuate 5  zonas 4-8
 //puntos rojos dentro
   noFill ();
   stroke(184,102,67); //rojo cafe 
    strokeWeight(7);
   
   point (484,853); // punto de arriba 1 
   point (487,870); // punto de arriba 2



 
 
 // circulos dentro de la figura anterior de color blanco con un punto negro 
  // circulo 1 4-6
  stroke (255,255,255); // blanco
  strokeWeight (11);
  point (470,690); // punto blanco
     stroke (0,0,0); // negro 
    strokeWeight (4);
    point (470,690); //punto negro dentro del blanco
    
    // circulo 2 5-6
  stroke (255,255,255); // blanco
  strokeWeight (13);
  point (526,660); // punto blanco
     stroke (0,0,0); // negro 
    strokeWeight (4);
    point (526,660); //punto negro dentro del blanco
          // triangulos que lo acompañan
          noStroke ();
          fill (249,222,131); //color amarillo quemado
          triangle (526,620,530,650,522,650); // arriba, derecha, izquierda (triangulo de arriba)
          triangle (520,669,530,670,507,685); // arriba, derecha, izquierda (triangulo de abajo)
          
         
    // circulo 3 6-6
  stroke (255,255,255); // blanco
  strokeWeight (10);
  point (600,700); // punto blanco
     stroke (0,0,0); // negro 
    strokeWeight (4);
    point (600,700); //punto negro dentro del blanco
             // triangulos que lo acompañan
          noStroke ();
          fill (249,222,131); //color amarillo quemado
          triangle (598,665,595,695,602,690); // arriba, derecha, izquierda (triangulo de arriba)
          triangle (595,705,600,713,586,727); //arriba, derecha, izqueierda (abajo)
    
    // circulo 4 4-7
  stroke (255,255,255); // blanco
  strokeWeight (11);
  point (480,800); // punto blanco
     stroke (0,0,0); // negro 
    strokeWeight (4);
    point (480,800); //punto negro dentro del blanco
           // triangulos que lo acompañan
          noStroke ();
          fill (249,222,131); //color amarillo quemado
          triangle (470,803,478,809,455,821); // arriba, derecha, izquierda (triangulo de arriba)
          triangle (451,778,476,789,468,795); // 
    
    // circulo 5 4-8
  stroke (255,255,255); // blanco
  strokeWeight (11);
  point (450,860); // punto blanco
     stroke (0,0,0); // negro 
    strokeWeight (4);
    point (450,860); //punto negro dentro del blanco
    
    
    
    //lineas en la parte derecha de la imagen 
    stroke(0,0,0);
    strokeWeight (6);
     line (705,760,880,950); // linea de arriba 1
     line (675,790,850,980); // linea de MEDIA 
     line (645,820,830,1012); // linea de abajo
     
     // varios arcos colgando de la estaca del pajaro 
     
     //arcos grandes 
     noFill ();
      stroke(0,0,0);
    strokeWeight (7);
     arc (180,800,250,250,5.5, HALF_PI + QUARTER_PI); // primero de izquierda a derecha 
     arc (310,672,250,250,5.5, HALF_PI + QUARTER_PI); // segundo de izquierda a derecha 
     arc (440,580,170,170,5.5, HALF_PI + QUARTER_PI); // tercero de izquierda a derecha 

      //paralelogramo azul ubicado abajo 
  noStroke ();
  fill (90, 134, 170, 200);
  quad (245, 590, 295, 545, 380, 638, 260, 670); // izq arri dere arriba dere abajo izq abajo
    //triangulo que toca los arcos colgantes zona 5-5 
  fill (255,255,255);
   triangle (485, 527, 584, 560, 580, 572); //punta, dere arriba, izq abajo
   
  
   //rectangulos debjao de los cuadrados en zona 8-4
   
   //rectandolo azul
   fill (74,107,139);//azul oscurito  
    quad (820,500,880,520,850,650,752,630); // izq arriba, derecha arriba, derecha abajo, izq abajo
   // rectangulo amarillo 
   fill (221,176,75);//amarillo 
   quad (860,460,920,500,890,560,830,540); //izq arriba dere arribadere abajo, izq abajo 
   
  // rectangolo naranja dsobre el amarillo 
  fill(204,80,51); //naranja 
  quad (820,420,890,420,840,605,792,600); //izq arriba, dere arriba, dere abajo, izq  abajo
   
   
   // figura super exotica que parece un toro 
  
  // nos iremos de la esquina de abajo por toda la derecha hasta tocar con la izquierda 
  stroke (89,89,150);
  strokeWeight (0);
  
  
  point(634,642); //0
  point (660,650); // 1
  point (695,656); // 2
  point (735,652); // 3 
  point (770,630); //4
  point (800,600);//5
  point (820,570);//6
  point (840,530);//7
  point (846,500);//8
  point (845,450);//9
  point (830,400);//10
  point (800,376);//11
  point (761,369);//12
  point (730,371);//13
  point (690,386);//14 
  point (689,386)
  point (692,400);//15
  point (696,420);//16
  point (699,436);//17
  point (710,438);//18
  point (750,450);//19
  point (783,480);//20
  point (795,520);//21
  point (793,550);//22
  point (780,580);//23
  point (776,585); //24
  //point (760,600);//25
  point (730,625);//26
  //point (710,632);//26
  point (690,640);//27
  point (660,640); //28
  point (640,640); //29
  point (630,640); //30
  
  strokeWeight(2);

  fill(89,89,150);
  beginShape();
  
  curveVertex(634,642);
 
  curveVertex (634,642); // 0
  curveVertex (660,650); //1
  curveVertex (695,656);//2
  curveVertex (735,652);//3
  curveVertex (770,630);
  curveVertex (800,600);
  curveVertex (820,570);
  curveVertex (840,530);
  curveVertex (846,500);  //8
  curveVertex (845,450);
  curveVertex (830,400);
  curveVertex (800,376);
  curveVertex (761,369);
  curveVertex (730,371);
  curveVertex (690,386); //14
  curveVertex (689,386)
  curveVertex (692,400); //15
  curveVertex (696,420);
  curveVertex (699,436);
  curveVertex (710,438);
  curveVertex (750,450);
  curveVertex (783,480);
  curveVertex (795,520);
  curveVertex (793,550);
  curveVertex (776,585);
  //curveVertex (760,600);
  curveVertex (730,625);
  
  curveVertex (690,640);
  curveVertex (660,640);
  curveVertex (640,640);
  curveVertex (630,640);
  
  curveVertex (630,640);
  endShape();
  strokeWeight (3);
  stroke(255,255,255);
  line (686,390,687,380);
  
  //ojo del toro 
  strokeWeight (24);
  stroke(255,255,255);
  point (790,405);
  
  // triangulo que apunta al ojo parece el cacho 
  noStroke ();
  fill (249,204,93);
  triangle(794,390,890,320,890,345); //punta ,arriba,abajo 
  
  // rectangulo negro detras del triangulo amarillo 
  fill (0,0,0);
  quad (900,320,910,315,913,330,901,335);
   //cuadrados rectos perfectos ewn la parte de abajo de la figura 
   
   // primer cuadrado escala de negros sobre la figura verde 
   fill (255,255,255);
   stroke (0,0,0);
   strokeWeight (1);
   rect (640,450,90,90);  // cuadrado grandee con borde negro color blanco 
   fill(137,136,133); //gris 
   rect (640,450,22.5,22.5); // primero de arriba a bajo yprimero de izquierda a derecha 
   rect (640,495,22.5,22.5); //tercero de arriba para abajo y segundo izqueirda a derecha 
   rect (685,450,22.5,22.5); //primero de arriba para abajo y tercero de izquierda a derecvha gris
   rect (685,495,22.5,22.5); //tercero de arriba para abajo y tercero de izquierda a derecvha gris
   
    fill(0,0,0); //negro 
   rect(662.5,472.5,22.5,22.5); // segundo de arriba para abajo y segundo de izquierda a derecha 
   rect (662.5,517,22.5,22.5);// cuarto de arribas a abajo y segundo de izquerda a derecha 
  rect (707.5,472.5,22.5,22.5); //tercero de arriba para abajo y segundo izqueirda a derecha 
  rect (707.5,517.5,22.5,22.5); //tercero de arriba para abajo y segundo izqueirda a derecha
    
    
    
    // segundo cuadrado grandes con cuadrados bebes 
    
    noFill ();
    stroke(0,0,0); //negro
     rect (820,450,90,90);  // cuadrado grandee con borde negro color blanco 
   
  //cuadrados que estan por dentro de este   
   
    fill(0,0,0); //negro
   rect (820,450,22.5,22.5); // primero de arriba a bajo yprimero de izquierda a derecha 
   rect (887.5,517.5,22.5,22.5); //tercero de arriba para abajo y segundo izqueirda a derecha
   
   fill(0,0,0,100); //negro con trasparencia 
   rect (820,495,22.5,22.5); //tercero de arriba para abajo y segundo izqueirda a derecha 
   rect (865,450,22.5,22.5); //primero de arriba para abajo y tercero de izquierda a derecvha gris
   rect (865,495,22.5,22.5); //tercero de arriba para abajo y tercero de izquierda a derecvha gris
   
   rect(842.5,472.5,22.5,22.5); // segundo de arriba para abajo y segundo de izquierda a derecha 
   rect (842.5,517,22.5,22.5);// cuarto de arribas a abajo y segundo de izquerda a derecha 
  rect (887.5,472.5,22.5,22.5); //tercero de arriba para abajo y segundo izqueirda a derecha 
  fill (255,255,255,90); // blanco 
  
   rect (842.5,450,22.5,22.5); // primero de arriba a bajo y segundo de izquierda a derecha
   rect (820,472.5,22.5,22.5); //segundo de arriba a apajo y primero de izquierda a derecha
   rect (820,517.5,22.5,22.5); //segundo de arriba a apajo y primero de izquierda a derecha 
   
   //arco del triangulo que se encuentra en la zona 5-5 
    strokeWeight (3);
    stroke (109,43,48);//rojo oscuro 
    fill (255,255,255);//blanco 
    arc(590,570,20,20,5.1,1.9,CHORD); 
   strokeWeight (5);
    point (570,561);

  
}
