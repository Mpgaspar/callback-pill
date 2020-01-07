 //Without callback
 function a(){
    console.log("Se ha ejecutado la función a");
  }
  
  function b(){
    console.log("Se ha ejecutado la función b");
  }
  
  a();
  b();

  //With callback
  function a(callback){
    setTimeout(function(){
      callback(console.log("Se ha ejecutado la función a"));
    },1000);
  }
  
  function b(){
    console.log("Se ha ejecutado la función b");
  }
  
  a(b);

  
  