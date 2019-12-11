/*function a(){
    console.log("Se ha ejecutado la función a");
  }
  
  function b(){
    console.log("Se ha ejecutado la función b");
  }
  
  a();
  b();*/

  function a(){
    // Simulamos un tiempo de espera en la ejecución de la función a
    setTimeout( function(){
      console.log("Se ha ejecutado la función a");
    }, 1000 );
  }
  
  function b(){
    console.log("Se ha ejecutado la función b");
  }
  
  a();
  b();