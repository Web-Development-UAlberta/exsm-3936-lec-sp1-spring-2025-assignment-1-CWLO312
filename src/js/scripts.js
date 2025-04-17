async function main() {
//define enginer class
  class engine {
    constructor(cylinderCount, isRunning) {
      this.cylinderCount = cylinderCount;
      this._isRunning = false;
    }
    get isRunning() {
      return this._isRunning;
    }
    set isRunning(isRunning) {
      this._isRunning = isRunning;
    }
  }
//define car class
    class car { 
    constructor(make, model, year, odometer, engine) {
      this.make = make;
      this.model = model;
      this.year = year;
      odometer = 0;
      this._odometer = odometer;            
      this._engine = engine;
    }
//define showInfo method
    showInfo() {
      return `The car is ${this.make} ${this.model} from ${this.year}; the odometer is at ${this._odometer}. this engine has ${this._engine.cylinderCount} cylinders.`;
    }
//define startEngine method
    startEngine() {
      this._engine.isRunning = true;
      return this._engine.isRunning;
    }
//define stopEngine method
    stopEngine() {
      this._engine.isRunning = false;
      return this._engine.isRunning;
    }
//define drive method
    drive(distanceToDrive) {
      this._odometer = this._odometer + distanceToDrive;
     return this._odometer;
    }
  }
  const engine1 = new engine(4, false);
  const myCar = new car("Toyota", "Camry", 2025, 500, engine1);
  output(myCar.showInfo());

  output(myCar.startEngine());
  myCar.drive(100);
  output(myCar.stopEngine());
  output(myCar.startEngine());
  myCar.drive(50);
  output(myCar.stopEngine());
  output(myCar._odometer);

  output (JSON.stringify(myCar));
}