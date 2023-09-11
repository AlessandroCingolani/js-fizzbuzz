/*
1. aggiungo loop for per prendere tutti i numeri da 1 a 100 
2. faccio un controllo se il resto di 3 è zero mi scrive Fizz
*/

for (let i = 1; i <= 100 ; i++){
  if(!(i % 3)) {
    // console.log('Fizz');
  }else if(!(i % 5)){
    // console.log('Buzz');
  }else if((i % 3) && (i % 5)){
    console.log('FizzBuzz');
  }
    

  console.log(i);
  }

  
  

  
