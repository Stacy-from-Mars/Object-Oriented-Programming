function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  // Only change code below this line
  Dog.prototype.isPrototypeOf(beagle);



  function printArray(array){
    console.log(Array.isArray(array))
    let l = array[0]
    if (l.length > 0){
      return array;
    } else {
      return array.join(',');
      }
  }


  console.log(printArray([["hello","this","is","an","array!"],["a","b","c","d","e!"]]))