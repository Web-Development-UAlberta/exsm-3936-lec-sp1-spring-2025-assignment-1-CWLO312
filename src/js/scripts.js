async function main() {
//define engine class
  class engine {
    constructor(cylinderCount, isRunning) {
      this.cylinderCount = cylinderCount || 0;
      this.isRunning = false;
    }
    get cylinderCount() {
      return this._cylinderCount;
    }
    set cylinderCount(cylinderCount) {
          if (typeof cylinderCount !== "number" ||cylinderCount < 0 || cylinderCount % 1 !== 0) {
           output ("Invalid cylinder count, it has to be a positive integer number. Defaulting to 0 cyclinder.");
           this._cylinderCount = 0;
          }
          else {
            this._cylinderCount = cylinderCount;
          }        
    }
    
    get isRunning() {
      return this._isRunning;
    }
    set isRunning(isRunning) {
        if (isRunning !== true || isRunning !== false) {
          output("Invalid engine running value, it has to be true or false.");
        } else {
          this._isRunning = isRunning;
        }
      }
    }
  
//define car class
    class car { 
    constructor(make, model, year, engine) {
      this.make = make;
      this.model = model;
      this.year = year;
      this._odometer = 0;            
      this._engine = engine;
    }
//define showInfo method
    showInfo() {
      return `The car is ${this.make} ${this.model} from ${this.year}; the odometer is at ${this._odometer}. this engine has ${this._engine._cylinderCount} cylinders.`;
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
  const engine1 = new engine(4, 3);
  const myCar = new car("Toyota", "Camry", 2025, engine1);
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