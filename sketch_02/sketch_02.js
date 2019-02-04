function setup() {
  
 var i=0; //variable a usar para eje x
 var j=0; //variable a usar para eje y
createCanvas (1600,1600);

background (0);
noStroke();
fill(226,186,31); //color amarillo
rect(400,400,800,800); //rectangulo amarillo
noStroke();
fill(250); //color blanco

// cuadrado 1 zona 1-1
for(var i=0; i< 400; i=i+200)// variable v
{ 
  for(var j=0; j<400; j=j+200) // variable y 
  {
    triangle (i,j,i+50,j,i+50,j+50); // primer triangulo 
    triangle (i+50,j,i+100,j,i+100,j+50);// segundo triangulo 
    triangle (i+100,j,i+150,j+50,i+100,j+50);//tercer  triangulo 
    triangle (i+150,j,i+150,j+50,i+200,j+50); //cuarto  triangulo 
    
    // segunda linea de triangulos en el cuadrado chico 
    triangle (i,j+50,i+50,j+50,i+50,j+100); //primer triangulo 
    triangle (i+50,j+50,i+100,j+100,i+50,j+100); // segundo triangulo 
    triangle (i+100,j+50,i+150,j+100,i+100,j+100);// tercer triangulo 
    triangle (i+150,j+50,i+200,j+50,i+200,j+100);// cuarto triangulo 
    
        // tercera linea en x  de triangulos en el cuadrado chico 
    triangle (i+0,j+100,i+50,j+150,i+0,j+150); // primer triangulo 
    triangle (i+50,j+100,i+100,j+150,i+50,j+150); // segundo  triangulo 
    triangle (i+100,j+100,i+150,j+100,i+150,j+150); // tercero triangulo 
    triangle (i+150,j+100,i+200,j+100,i+200,j+150); // cuarto triangulo 
    
      //cuarta linea en x de triangulos
    triangle (i+0,j+150,i+50,j+200,i+0,j+200); // primer triangulo 
    triangle (i+50,j+150,i+100,j+150,i+100,j+200); // segundo triangulo  
    triangle (i+100,j+150,i+150,j+150,i+150,j+200);// tercer triangulo 
    triangle (i+150,j+150,i+200,j+200,i+150,j+200); // cuarto triangulo 
    
    }
} 
     // segundo cuadrado zona 2-1
  for (var i= 400; i<800; i =i+200)
  {
  for (var j=0 ; j< 400; j= j+200){

    triangle (i,j,i+50,j,i,j+50); // triangulo d primero 
    triangle (i+ 50,j,i+100,j,i+50,j+50); // triangulo e segundo 
    triangle (i+100,j+50,i+150,j,i+150,j+50); // triangulo f tercero 
    triangle (i+150,j+50,+i+200,j,i+200,j+50); // triangulo g cuarto 
    
    // segunda linea del segndo cuadrado de izq a dere 
    
    triangle (i,j+100,i+50,j+50,i+50,j+100);
    triangle (i+50,j+50,i+100,j+50,i+50,j+100);
    triangle (i+100,j+50,i+150,j+50,i+100,j+100);
    triangle (i+200,j+50,i+150,j+100,i+200,j+100);
    
    // tercer linea del segundo truangulo
    
    triangle (i,j+150,i+50,j+100,i+50,j+150);
    triangle (i+50,j+150,i+100,j+100,i+100,j+150);
    triangle (i+100,j+100,i+150,j+100,i+100,j+150);
    triangle (i+150,j+100,i+200,j+100,i+150,j+150);
    
    // cuarta linea del segundo cuadrado 
    triangle (i,j+150,i+50,j+150,i,j+200);
    triangle  (i+150,j+150,i+200,j+150,i+150,j+200);
    triangle (i+100,j+150,i+100,j+200,i+50,j+200);
    triangle (i+150,j+150,i+150,j+200,i+100,j+200);
  }
  }
  // tercer cuadrado ubicado en 1-3
  for (i=0;i<400; i=i+200){ // eje x 
  for (j=400; j<800; j=j+200){ // eje y 
  
  // primera linea del tercer cuadrado 
  triangle (i,j+50,i+50,j+50,i+50,j);//primer triangulo 
  triangle (i+50,j,i+50,j+50,i+100,j);//segundo triangulo 
  triangle (i+100,j,i+100,j+50,i+150,j); //tercer  triangulo 
  triangle (i+200,j,i+200,j+50,i+150,j+50); //cuarto  triangulo 
    
    // segunda linea de tercer cuadrado 
  triangle (i,j+100,i+50,j+100,i+50,j+50);//primer triangulo
  triangle (i+50,j+100,i+100,j+100,i+100,j+50); //segundo triangulo
  triangle (i+100,j+100,i+100,j+50,i+150,j+50); //tercer triangulo
  triangle (i+150,j+100,i+150,j+50,i+200,j+50); //cuarto triangulo
  
  // tercer linea de tercer cuadrado
  triangle (i,j+100,i,j+150,i+50,j+100); //primer triangulo
  triangle (i+50,j+150,i+100,j+150,i+100,j+100); //segundo triangulo
  triangle (i+150,j+100,i+150,j+150,i+100,j+150); // tercer triangulo
  triangle (i+150,j+100,i+200,j+100,i+150,j+150); // cuarto triangulo
  
   // cuarta linea DEL TERCER CUADRADO 
   
   triangle (i,j+150,i+50,j+150,i,j+200); // primer triangulo 
   triangle (i+50,j+150,i+100,j+150,i+50,j+200); // segundo triangulo 
   triangle (i+150,j+150,i+150,j+200,i+100,j+200);// tercer triangulo 
   triangle (i+200,j+150,i+200,j+200,i+150,j+200); // cuarto truangulo 
   
  }
  }
  
 
  // cuarto cuadrado ubicado en zona 2-2
   
  for (var i= 400; i< 800 ; i=i+200){
  for (var j=400; j<800; j=j+200){
    // primera linea del cuarto cuadrado 
  triangle (i,j, i+50,j,i+50,j+50); // primer triangulo 
  triangle (i+50,j,i+100,j+50,i+50,j+50);// segundo truangulo 
  triangle (i+100,j,i+150,j+50,i+100,j+50);// tercer treuangulo 
  triangle (i+150,j, i+200,j,i+200,j+50);// cuarto triangulo 
  
  // segunda linea del cuarto cuadrado 
  triangle (i,j+50,i+50,j+100,i,j+100); //primer triangulo 
  triangle (i+50,j+50,i+100,j+100,i+50,j+100); // segundo triangulo 
  triangle (i+100,j+50,i+150,j+50,i+150,j+100);// tercer triangulo 
  triangle (i+150,j+50,i+200,j+50,i+200,j+100);// cuarto triangulo 

  //tercera  linea del cuarto cuadrado 
  triangle (i,j+100,i+50,j+150,i,j+150);// primer triangulo 
  triangle (i+50,j+100,i+100,j+100,i+100,j+150);// segundo triangulo 
  triangle (i+100,j+100,i+150,j+100,i+150,j+150);// tercer triangulo 
  triangle (i+150,j+100,i+200,j+150,i+150,j+150);// cuarto triangulo 
  
  //cuarta linea del cuarto cuadrado 
  triangle (i,j+150, i+50,j+150,i+50,j+200); // primer triangulo 
  triangle (i+50,j+150, i+100,j+150,i+100,j+200); // segundo triangulo 
  triangle (i+100,j+150,i+150,j+200,i+100,j+200);// tercer triangulo 
  triangle (i+150,j+150,i+200,j+200,i+150,j+200);// cuarto triangulo 
} 
    }
  
  // REPLICAS 
  
  
  //replica primer cuadrado zona 3-1

  for(var i=800; i< 1200; i=i+200) 
{
  for(var j=0; j<400; j=j+200)
  {
    triangle (i,j,i+50,j,i+50,j+50); //primer tiangulo 
    triangle (i+50,j,i+100,j,i+100,j+50);// segundo triangulo 
    triangle (i+100,j,i+150,j+50,i+100,j+50);//tercer triangulo  
    triangle (i+150,j,i+150,j+50,i+200,j+50); //cuarto triangulo 
    
    // segunda linea de triangulos en el cuadrado chico 
    triangle (i,j+50,i+50,j+50,i+50,j+100); //primer triangulo 
    triangle (i+50,j+50,i+100,j+100,i+50,j+100); // segundo triangulo 
    triangle (i+100,j+50,i+150,j+100,i+100,j+100);// tercer triangulo 
    triangle (i+150,j+50,i+200,j+50,i+200,j+100);// cuarto triangulo 
        
        // tercera linea en x  de triangulos en el cuadrado chico 
    triangle (i+0,j+100,i+50,j+150,i+0,j+150); // primer triangulo 
    triangle (i+50,j+100,i+100,j+150,i+50,j+150); // segundo triangulo 
    triangle (i+100,j+100,i+150,j+100,i+150,j+150); // tercer triangulo 
    triangle (i+150,j+100,i+200,j+100,i+200,j+150); // cuarto triangulo 
      
      //cuarta linea en x de triangulos
    triangle (i+0,j+150,i+50,j+200,i+0,j+200); // primer triangulo 
    triangle (i+50,j+150,i+100,j+150,i+100,j+200); // segundo triangulo 
    triangle (i+100,j+150,i+150,j+150,i+150,j+200);// tercer triangulo 
    triangle (i+150,j+150,i+200,j+200,i+150,j+200); // cuarto triangulo 
        
  }
}
  
  //replica primer cuadrado zona 1-3
   for(var i=0; i< 400; i=i+200) 
{
  for(var j=800; j<1200; j=j+200)
  {
    triangle (i,j,i+50,j,i+50,j+50); //primer triangulo 
    triangle (i+50,j,i+100,j,i+100,j+50);// segundo triangulo 
    triangle (i+100,j,i+150,j+50,i+100,j+50);//tercer triangulo 
    triangle (i+150,j,i+150,j+50,i+200,j+50); //cuarto triangulo 
    
    // segunda linea de triangulos en el cuadrado chico 
    triangle (i,j+50,i+50,j+50,i+50,j+100); //primer triangulo 
    triangle (i+50,j+50,i+100,j+100,i+50,j+100); // segundo triangulo 
    triangle (i+100,j+50,i+150,j+100,i+100,j+100);// tercer triangulo 
    triangle (i+150,j+50,i+200,j+50,i+200,j+100);// cuarto triangulo 
        
        // tercera linea en x  de triangulos en el cuadrado chico 
    triangle (i+0,j+100,i+50,j+150,i+0,j+150); // primer triangulo 
    triangle (i+50,j+100,i+100,j+150,i+50,j+150); // segundo triangulo 
    triangle (i+100,j+100,i+150,j+100,i+150,j+150); // tercer triangulo 
    triangle (i+150,j+100,i+200,j+100,i+200,j+150); // cuarto triangulo 
      
      //cuarta linea en x de triangulos
    triangle (i+0,j+150,i+50,j+200,i+0,j+200); // primer triangulo 
    triangle (i+50,j+150,i+100,j+150,i+100,j+200); // segundo triangulo 
    triangle (i+100,j+150,i+150,j+150,i+150,j+200);// tercer triangulo 
    triangle (i+150,j+150,i+200,j+200,i+150,j+200); // cuarto triangulo 
        
  }
}
 
 
  //replica primer cuadrado zona 3-3
   for(var i=800; i< 1200; i=i+200) 
{
  for(var j=800; j<1200; j=j+200)
  {
    triangle (i,j,i+50,j,i+50,j+50); //primer triangulo 
    triangle (i+50,j,i+100,j,i+100,j+50);// segundo triangulo 
    triangle (i+100,j,i+150,j+50,i+100,j+50);//tercer triangulo 
    triangle (i+150,j,i+150,j+50,i+200,j+50); //cuarto triangulo 
    
    // segunda linea de triangulos en el cuadrado chico 
    triangle (i,j+50,i+50,j+50,i+50,j+100); //primero 
    triangle (i+50,j+50,i+100,j+100,i+50,j+100); // segundo 
    triangle (i+100,j+50,i+150,j+100,i+100,j+100);// tercero 
    triangle (i+150,j+50,i+200,j+50,i+200,j+100);// cuarto 
        
        // tercera linea en x  de triangulos en el cuadrado chico 
    triangle (i+0,j+100,i+50,j+150,i+0,j+150); // primero 
    triangle (i+50,j+100,i+100,j+150,i+50,j+150); // segundo 
    triangle (i+100,j+100,i+150,j+100,i+150,j+150); // tercero 
    triangle (i+150,j+100,i+200,j+100,i+200,j+150); // cuarto 
      
      //cuarta linea en x de triangulos
    triangle (i+0,j+150,i+50,j+200,i+0,j+200); // primer triangulo 
    triangle (i+50,j+150,i+100,j+150,i+100,j+200); // segundo triangulo 
    triangle (i+100,j+150,i+150,j+150,i+150,j+200);// tercer triangulo 
    triangle (i+150,j+150,i+200,j+200,i+150,j+200); // cuarto triangulo 
        
  }
}
  //replica del segundo cuadrado pos 4-1
  for (var i= 1200; i<1600; i =i+200)
  {
  for (var j=0 ; j< 400; j= j+200){

    triangle (i,j,i+50,j,i,j+50); // triangulo d primero 
    triangle (i+ 50,j,i+100,j,i+50,j+50); // triangulo e segundo 
    triangle (i+100,j+50,i+150,j,i+150,j+50); // triangulo f tercero 
    triangle (i+150,j+50,+i+200,j,i+200,j+50); // triangulo g cuarto 
    
    // segunda linea del segndo cuadrado de izq a dere 
    
    triangle (i,j+100,i+50,j+50,i+50,j+100); // primer triangulo 
    triangle (i+50,j+50,i+100,j+50,i+50,j+100); // segundo triangulo 
    triangle (i+100,j+50,i+150,j+50,i+100,j+100); // tercer triangulo 
    triangle (i+200,j+50,i+150,j+100,i+200,j+100); //cuerto triangulo 
    
    // tercer linea del segundo truangulo
    
    triangle (i,j+150,i+50,j+100,i+50,j+150); // primer triangulo 
    triangle (i+50,j+150,i+100,j+100,i+100,j+150); // segundo triangulo 
    triangle (i+100,j+100,i+150,j+100,i+100,j+150);// tercer triangulo 
    triangle (i+150,j+100,i+200,j+100,i+150,j+150); // cuarto triangulo 
    
    // cuarta linea del segundo cuadrado 
    triangle (i,j+150,i+50,j+150,i,j+200); // primer triangulo 
    triangle  (i+150,j+150,i+200,j+150,i+150,j+200); // segundo triangulo 
    triangle (i+100,j+150,i+100,j+200,i+50,j+200); // tercer triangulo 
    triangle (i+150,j+150,i+150,j+200,i+100,j+200); // cuarto triangulo 
  }
  }
  // replica del segundo cuadrado zona 2-3
  for (var i= 400; i<800; i =i+200)
  {
  for (var j=800 ; j< 1200; j= j+200){

    triangle (i,j,i+50,j,i,j+50); // triangulo d primero 
    triangle (i+ 50,j,i+100,j,i+50,j+50); // triangulo e segundo 
    triangle (i+100,j+50,i+150,j,i+150,j+50); // triangulo f tercero 
    triangle (i+150,j+50,+i+200,j,i+200,j+50); // triangulo g cuarto 
    
    // segunda linea del segundo cuadrado de izq a dere 
    
    triangle (i,j+100,i+50,j+50,i+50,j+100);// primer triangulo
    triangle (i+50,j+50,i+100,j+50,i+50,j+100);// segundo triangulo 
    triangle (i+100,j+50,i+150,j+50,i+100,j+100);// tercer triangulo 
    triangle (i+200,j+50,i+150,j+100,i+200,j+100); // cuarto triangulo
    
    // tercer linea del segundo truangulo
    
    triangle (i,j+150,i+50,j+100,i+50,j+150);// primer triangulo
    triangle (i+50,j+150,i+100,j+100,i+100,j+150);// segundo triangulo 
    triangle (i+100,j+100,i+150,j+100,i+100,j+150);// tercer triangulo 
    triangle (i+150,j+100,i+200,j+100,i+150,j+150);// cuarto triangulo
    
    // cuarta linea del segundo cuadrado 
    triangle (i,j+150,i+50,j+150,i,j+200);// primer triangulo
    triangle  (i+150,j+150,i+200,j+150,i+150,j+200);// segundo triangulo 
    triangle (i+100,j+150,i+100,j+200,i+50,j+200);// tercer triangulo 
    triangle (i+150,j+150,i+150,j+200,i+100,j+200);// cuarto triangulo
  }
  }
  
  // replica del segundo cuadrado zona 4-3
  for (var i= 1200; i<1600; i =i+200)
  {
  for (var j=800 ; j< 1200; j= j+200){

    triangle (i,j,i+50,j,i,j+50); // triangulo d primero 
    triangle (i+ 50,j,i+100,j,i+50,j+50); // triangulo e segundo 
    triangle (i+100,j+50,i+150,j,i+150,j+50); // triangulo f tercero 
    triangle (i+150,j+50,+i+200,j,i+200,j+50); // triangulo g cuarto 
    
    // segunda linea del segndo cuadrado de izq a dere 
    
    triangle (i,j+100,i+50,j+50,i+50,j+100);// primer triangulo
    triangle (i+50,j+50,i+100,j+50,i+50,j+100);// segundo triangulo 
    triangle (i+100,j+50,i+150,j+50,i+100,j+100);// tercer triangulo 
    triangle (i+200,j+50,i+150,j+100,i+200,j+100);// cuarto triangulo
    
    // tercer linea del segundo truangulo
    
    triangle (i,j+150,i+50,j+100,i+50,j+150);// primer triangulo
    triangle (i+50,j+150,i+100,j+100,i+100,j+150);// segundo triangulo
    triangle (i+100,j+100,i+150,j+100,i+100,j+150);// segundo triangulo
    triangle (i+150,j+100,i+200,j+100,i+150,j+150);// cuarto triangulo
    
    // cuarta linea del segundo cuadrado 
    triangle (i,j+150,i+50,j+150,i,j+200);// primer triangulo
    triangle  (i+150,j+150,i+200,j+150,i+150,j+200);// segundo triangulo
    triangle (i+100,j+150,i+100,j+200,i+50,j+200);// segundo triangulo
    triangle (i+150,j+150,i+150,j+200,i+100,j+200);// cuarto triangulo
  }
  }
  
  
   // replica tercer cuadrado zona 3-2
  for (i=800;i<1200; i=i+200){ // eje x 
  for (j=400; j<800; j=j+200){ // eje y 
  
  // primera linea del tercer cuadrado 
  triangle (i,j+50,i+50,j+50,i+50,j);//primer triangulo 
  triangle (i+50,j,i+50,j+50,i+100,j);//segundo triangulo 
  triangle (i+100,j,i+100,j+50,i+150,j); //tercer  triangulo 
  triangle (i+200,j,i+200,j+50,i+150,j+50); //cuarto  triangulo 
    
    // segunda linea de tercer cuadrado 
  triangle (i,j+100,i+50,j+100,i+50,j+50);//primer triangulo
  triangle (i+50,j+100,i+100,j+100,i+100,j+50); //segundo triangulo
  triangle (i+100,j+100,i+100,j+50,i+150,j+50); //tercer triangulo
  triangle (i+150,j+100,i+150,j+50,i+200,j+50); //cuarto triangulo
  
  // tercer linea de tercer cuadrado
  triangle (i,j+100,i,j+150,i+50,j+100); //primer triangulo
  triangle (i+50,j+150,i+100,j+150,i+100,j+100); //segundo triangulo
  triangle (i+150,j+100,i+150,j+150,i+100,j+150); // tercer triangulo
  triangle (i+150,j+100,i+200,j+100,i+150,j+150); // cuarto triangulo
  
   // cuarta linea DEL TERCER CUADRADO 
   
   triangle (i,j+150,i+50,j+150,i,j+200); // primer triangulo 
   triangle (i+50,j+150,i+100,j+150,i+50,j+200); // segundo triangulo 
   triangle (i+150,j+150,i+150,j+200,i+100,j+200);// tercer triangulo 
   triangle (i+200,j+150,i+200,j+200,i+150,j+200); // cuarto truangulo 
   
  }
  }
  
  // replica tercer cuadrado zona 3-4
  for (i=800;i<1200; i=i+200){ // eje x 
  for (j=1200; j<1600; j=j+200){ // eje y 
  
  // primera linea del tercer cuadrado 
  triangle (i,j+50,i+50,j+50,i+50,j);//primer triangulo 
  triangle (i+50,j,i+50,j+50,i+100,j);//segundo triangulo 
  triangle (i+100,j,i+100,j+50,i+150,j); //tercer  triangulo 
  triangle (i+200,j,i+200,j+50,i+150,j+50); //cuarto  triangulo 
    
    // segunda linea de tercer cuadrado 
  triangle (i,j+100,i+50,j+100,i+50,j+50);//primer triangulo
  triangle (i+50,j+100,i+100,j+100,i+100,j+50); //segundo triangulo
  triangle (i+100,j+100,i+100,j+50,i+150,j+50); //tercer triangulo
  triangle (i+150,j+100,i+150,j+50,i+200,j+50); //cuarto triangulo
  
  // tercer linea de tercer cuadrado
  triangle (i,j+100,i,j+150,i+50,j+100); //primer triangulo
  triangle (i+50,j+150,i+100,j+150,i+100,j+100); //segundo triangulo
  triangle (i+150,j+100,i+150,j+150,i+100,j+150); // tercer triangulo
  triangle (i+150,j+100,i+200,j+100,i+150,j+150); // cuarto triangulo
  
   // cuarta linea DEL TERCER CUADRADO 
   
   triangle (i,j+150,i+50,j+150,i,j+200); // primer triangulo 
   triangle (i+50,j+150,i+100,j+150,i+50,j+200); // segundo triangulo 
   triangle (i+150,j+150,i+150,j+200,i+100,j+200);// tercer triangulo 
   triangle (i+200,j+150,i+200,j+200,i+150,j+200); // cuarto truangulo 
   
  }
  }
  
  // replica tercer cuadrado zona 1-4
  for (i=0;i<400; i=i+200){ // eje x 
  for (j=1200; j<1600; j=j+200){ // eje y 
  
  // primera linea del tercer cuadrado 
  triangle (i,j+50,i+50,j+50,i+50,j);//primer triangulo 
  triangle (i+50,j,i+50,j+50,i+100,j);//segundo triangulo 
  triangle (i+100,j,i+100,j+50,i+150,j); //tercer  triangulo 
  triangle (i+200,j,i+200,j+50,i+150,j+50); //cuarto  triangulo 
    
    // segunda linea de tercer cuadrado 
  triangle (i,j+100,i+50,j+100,i+50,j+50);//primer triangulo
  triangle (i+50,j+100,i+100,j+100,i+100,j+50); //segundo triangulo
  triangle (i+100,j+100,i+100,j+50,i+150,j+50); //tercer triangulo
  triangle (i+150,j+100,i+150,j+50,i+200,j+50); //cuarto triangulo
  
  // tercer linea de tercer cuadrado
  triangle (i,j+100,i,j+150,i+50,j+100); //primer triangulo
  triangle (i+50,j+150,i+100,j+150,i+100,j+100); //segundo triangulo
  triangle (i+150,j+100,i+150,j+150,i+100,j+150); // tercer triangulo
  triangle (i+150,j+100,i+200,j+100,i+150,j+150); // cuarto triangulo
  
   // cuarta linea DEL TERCER CUADRADO 
   
   triangle (i,j+150,i+50,j+150,i,j+200); // primer triangulo 
   triangle (i+50,j+150,i+100,j+150,i+50,j+200); // segundo triangulo 
   triangle (i+150,j+150,i+150,j+200,i+100,j+200);// tercer triangulo 
   triangle (i+200,j+150,i+200,j+200,i+150,j+200); // cuarto triangulo 
   
  }
  }
  
  
  // Replica cuarto cuadrado ubicado en zona 4-2
   
  for (var i= 1200; i< 1600 ; i=i+200){
  for (var j=400; j<800; j=j+200){
    // primera linea del cuarto cuadrado
    
  triangle (i,j, i+50,j,i+50,j+50); // primer triangulo 
  triangle (i+50,j,i+100,j+50,i+50,j+50);// segundo truangulo 
  triangle (i+100,j,i+150,j+50,i+100,j+50);// tercer treuangulo 
  triangle (i+150,j, i+200,j,i+200,j+50);// cuarto triangulo 
  
  // segunda linea del cuarto cuadrado 
  triangle (i,j+50,i+50,j+100,i,j+100); //primer triangulo 
  triangle (i+50,j+50,i+100,j+100,i+50,j+100); // segundo triangulo 
  triangle (i+100,j+50,i+150,j+50,i+150,j+100);// tercer triangulo 
  triangle (i+150,j+50,i+200,j+50,i+200,j+100);// cuarto triangulo 

  //tercera  linea del cuarto cuadrado 
  triangle (i,j+100,i+50,j+150,i,j+150);// primer triangulo 
  triangle (i+50,j+100,i+100,j+100,i+100,j+150);// segundo triangulo 
  triangle (i+100,j+100,i+150,j+100,i+150,j+150);// tercer triangulo 
  triangle (i+150,j+100,i+200,j+150,i+150,j+150);// cuarto triangulo 
  
  //cuarta linea del cuarto cuadrado 
  triangle (i,j+150, i+50,j+150,i+50,j+200); // primer triangulo 
  triangle (i+50,j+150, i+100,j+150,i+100,j+200); // segundo triangulo 
  triangle (i+100,j+150,i+150,j+200,i+100,j+200);// tercer triangulo 
  triangle (i+150,j+150,i+200,j+200,i+150,j+200);// cuarto triangulo 
} 
    }
    
    // Replica cuarto cuadrado ubicado en zona 2-4
   
  for (var i= 400; i< 800 ; i=i+200){
  for (var j=1200; j<1600; j=j+200){
    // primera linea del cuarto cuadrado 
  triangle (i,j, i+50,j,i+50,j+50); // primer triangulo 
  triangle (i+50,j,i+100,j+50,i+50,j+50);// segundo truangulo 
  triangle (i+100,j,i+150,j+50,i+100,j+50);// tercer treuangulo 
  triangle (i+150,j, i+200,j,i+200,j+50);// cuarto triangulo 
  
  // segunda linea del cuarto cuadrado 
  triangle (i,j+50,i+50,j+100,i,j+100); //primer triangulo 
  triangle (i+50,j+50,i+100,j+100,i+50,j+100); // segundo triangulo 
  triangle (i+100,j+50,i+150,j+50,i+150,j+100);// tercer triangulo 
  triangle (i+150,j+50,i+200,j+50,i+200,j+100);// cuarto triangulo 

  //tercera  linea del cuarto cuadrado 
  triangle (i,j+100,i+50,j+150,i,j+150);// primer triangulo 
  triangle (i+50,j+100,i+100,j+100,i+100,j+150);// segundo triangulo 
  triangle (i+100,j+100,i+150,j+100,i+150,j+150);// tercer triangulo 
  triangle (i+150,j+100,i+200,j+150,i+150,j+150);// cuarto triangulo 
  
  //cuarta linea del cuarto cuadrado 
  triangle (i,j+150, i+50,j+150,i+50,j+200); // primer triangulo 
  triangle (i+50,j+150, i+100,j+150,i+100,j+200); // segundo triangulo 
  triangle (i+100,j+150,i+150,j+200,i+100,j+200);// tercer triangulo 
  triangle (i+150,j+150,i+200,j+200,i+150,j+200);// cuarto triangulo 
} 
    }
    
    // Replica cuarto cuadrado ubicado en zona 4-4
   
  for (var i= 1200; i< 1600 ; i=i+200){
  for (var j=1200; j<1600; j=j+200){
    // primera linea del cuarto cuadrado 
  triangle (i,j, i+50,j,i+50,j+50); // primer triangulo 
  triangle (i+50,j,i+100,j+50,i+50,j+50);// segundo truangulo 
  triangle (i+100,j,i+150,j+50,i+100,j+50);// tercer treuangulo 
  triangle (i+150,j, i+200,j,i+200,j+50);// cuarto triangulo 
  
  // segunda linea del cuarto cuadrado 
  triangle (i,j+50,i+50,j+100,i,j+100); //primer triangulo 
  triangle (i+50,j+50,i+100,j+100,i+50,j+100); // segundo triangulo 
  triangle (i+100,j+50,i+150,j+50,i+150,j+100);// tercer triangulo 
  triangle (i+150,j+50,i+200,j+50,i+200,j+100);// cuarto triangulo 

  //tercera  linea del cuarto cuadrado 
  triangle (i,j+100,i+50,j+150,i,j+150);// primer triangulo 
  triangle (i+50,j+100,i+100,j+100,i+100,j+150);// segundo triangulo 
  triangle (i+100,j+100,i+150,j+100,i+150,j+150);// tercer triangulo 
  triangle (i+150,j+100,i+200,j+150,i+150,j+150);// cuarto triangulo 
  
  //cuarta linea del cuarto cuadrado 
  triangle (i,j+150, i+50,j+150,i+50,j+200); // primer triangulo 
  triangle (i+50,j+150, i+100,j+150,i+100,j+200); // segundo triangulo 
  triangle (i+100,j+150,i+150,j+200,i+100,j+200);// tercer triangulo 
  triangle (i+150,j+150,i+200,j+200,i+150,j+200);// cuarto triangulo 
} 
    }
}
