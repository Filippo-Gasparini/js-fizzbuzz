console.log('FizzBuzz')


//Scrivi un programma che stampi i numeri da 1 a 100,
//ma per i multipli di 3 stampi “Fizz”
//al posto del numero e per i multipli di 5 stampi Buzz. 
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.



// stampo i numeri da 1 a 100

for (let i = 0; i < 100; i++){      
    console.log(i)

// stampo la variabile per i multipli di 3 con nome "Fizz" al posto del numero


 if (i % 3 ==0) {
    console.log ('Fizz')
}

// stampo la variabile per i multipli di 5 con nome "Buzz" al posto del numero

else if (i % 5) {
    console.log('Buzz')
} 

  }