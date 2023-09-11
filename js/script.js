/*
1. aggiungo loop for per prendere tutti i numeri da 1 a 100 
2. faccio un controllo per fizzbuzz fizz e buzz con il modulo
3. creo const del contenitore box per mettere dentro i box generati
*/

const containerBox = document.querySelector('.container-box')

for (let i = 1; i <= 100 ; i++){

  const box = document.createElement('div');
  box.classList.add('box');
  box.append(i);
  containerBox.append(box)
  if(!(i % 3) && !(i % 5)) {
    console.log(i + ' FizzBuzz');
  }else if(!(i % 3)){
    console.log(i + ' Fizz');
  }else if (!(i % 5)){
    console.log(i + ' Buzz');
  }
    

  console.log(i);
  }

  
  

  
