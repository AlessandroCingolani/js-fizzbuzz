/*
1. aggiungo loop for per prendere tutti i numeri da 1 a 100 
2. faccio un controllo per fizzbuzz fizz e buzz con il modulo
3. creo const del contenitore box per mettere dentro i box generati
4. cambio colore aggiungendo classe al box (la classe è già pronta nel css)
*/

const containerBox = document.querySelector('.container-box')

for (let i = 1; i <= 100 ; i++){

  const box = document.createElement('div');
  box.classList.add('box');
 
  containerBox.append(box)
  if(!(i % 3) && !(i % 5)) {
    box.append('FizzBuzz');
    box.classList.add ('fizzbuzz');
  }else if(!(i % 3)){
    box.append('Fizz');
    box.classList.add ('fizz');
  }else if (!(i % 5)){
    box.append('Buzz');
    box.classList.add ('buzz');
  }else {
    box.append(i);
  }
  console.log(box);
  }

  
  

  
