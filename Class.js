class Car {
  constructor(model, year) {
    this.model = model,
    this.year = year
    Car.totalCars++;
  }

  static totalCars = 0;
  
  startCar() {
    console.log('Car Started!');
  }

  drive() {
    console.log("Driving car");
  }

  setModelAndYear(model, year){
    this.model = model
    this.year = year
  }

  getModelAndYear(){
    console.log(this.model, this.year)
  }

  static accessStatic() {
    console.log(this.totalCars);
  }
}

const Toyota = new Car("Tundra", 2020);
const Lexus = new Car("RX 250", 2022);

// Checking number of car instances created
console.log(Car.totalCars);

// Displaying each car instance created
console.log(Toyota);
// console.log(Lexus);


// Set year of created car model
Toyota.setModelAndYear("Tundra", 2023);
// console.log(Toyota);

Toyota.getModelAndYear();

// Calling the startCar method for each car instance created
Toyota.startCar();

// Calling the drive method for Different Car instance created
Toyota.drive();