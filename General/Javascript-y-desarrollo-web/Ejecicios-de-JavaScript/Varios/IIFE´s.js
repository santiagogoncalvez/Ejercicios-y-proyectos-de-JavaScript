
// Sin IIFE

for(var i = 0; i < 10; i++) {
    console.log(i);
    setTimeout(function() {
      console.log('El número es ' + i);
    });
  }


// Con IIFE

for (var i = 0; i < 10; i++) {
    console.log(i)
    
    
     ;(function(i){
        setTimeout(function() {
            console.log("El número es " + i);
          },1000)
    })(i)
      

}