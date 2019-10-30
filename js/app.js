// function pow(x, n){
// return 8; 
// }

function pow(x, n) {
    let result = 1;
  
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  console.log(pow(4, 5))


function sayHello(){
return "Hello!";
}

function addTwoNumbers(a, b){
    return a + b ;
}

function addOne(d){
    return d + 1;
}

let calculator = {}

// function yellPhrase(phrase) {
//     return phrase.toUpperCase();
//   }
//   console.log(yellPhrase('hi you'))

  function yellPhrase(phrase) {
    if (typeof phrase !== 'string') {
      return 'Please input a string.';
    }
    return phrase.toUpperCase();
  }