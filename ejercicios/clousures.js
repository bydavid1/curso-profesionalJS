class makeCounter {
    #count;

    constructor(n) {
      this.#count = n;
    }

    get count() {
      return this.#count;
    }

    increase() {
      this.#count += 1;
    }

    decrease() {
      this.#count -= 1;
    }
}

  let counter = new makeCounter(7);

  console.log("The Count is:", counter.count);
  counter.increase();
  console.log("The Count is:", counter.count);
  counter.decrease();
  counter.decrease();
  counter.decrease();
  counter.decrease();
  console.log("The Count is:", counter.count);

  // EL tag # sirve para declarar variables privadas

  (function() {
      let color = "green"

      function printColor() {
          console.log(color)
      }

      printColor()
  })();

  function makeColorPrinter(color){
      let colorMsg = `The color is ${color}`

      return function () {
          console.log(colorMsg)
      }
  }

  let greenColorePrinter = makeColorPrinter('green')
  console.log(greenColorePrinter())
  