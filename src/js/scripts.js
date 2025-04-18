async function main() {
//define engine class
  class engine {
    constructor(cylinderCount) {
      this.cylinderCount = cylinderCount;
      this.isRunning = false;
    }
    get cylinderCount() {
      return this._cylinderCount;
    }
    set cylinderCount(cylinderCount) {
          if (typeof cylinderCount !== "number" || cylinderCount < 0 || cylinderCount % 1 !== 0) {
           output ("Invalid cylinder count, it has to be a positive integer number. Defaulting to 0 cyclinder.");
           this._cylinderCount = 0;
          }
          else {
            this._cylinderCount = cylinderCount;
          }        
    }    
    }
  //define car class
    class car { 
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
      this._odometer = 0;
      const myEngine = new engine(4);            
      this._engine = myEngine;
    }
      get make() {
        return this._make;  
      }
      get model() {
        return this._model;  
      }
      get year() {
        return this._year;  
      }
      set make(make) {
        if (typeof make !== "string" || make.length < 1) {
          output("Invalid make, it has to be a non-empty string. Defaulting to empty string.");
          this._make = "";
        } else {
          this._make = make;
        }
      }
      set model(model) {
        if (typeof model !== "string" || model.length < 1) {
          output("Invalid model, it has to be a non-empty string. Defaulting to empty string.");
          this._model = "";
        } else {
          this._model = model;
        }
      }
      set year(year) {
        if (typeof year !== "number" || year < 0 || year % 1 !== 0) {
          output("Invalid year, it has to be a positive integer number. Defaulting to 0.");
          this._year = 0;
        } else {
          this._year = year;
        }
      }


//define showInfo method
    showInfo() {
      return `The car is ${this.make} ${this.model} from ${this.year}; the odometer is at ${this._odometer}. this engine has ${this._engine._cylinderCount} cylinders.`;
    }
//define startEngine method
    startEngine() {
      if (this._engine.isRunning === true) {
        output("The engine is already running.");
        return this._engine.isRunning;
      } else {
            this._engine.isRunning = true;
      }
      return this._engine.isRunning;
    }
//define stopEngine method
    stopEngine() {
      if (this._engine.isRunning === false) {
        output("The engine is already stopped.");
        return this._engine.isRunning;
      } else {
            this._engine.isRunning = false;
      }
      return this._engine.isRunning;
    }
//define drive method
    drive(distanceToDrive) {
      if (this._engine.isRunning === false) {
        output("The engine is not running. No distance has been driven.");
        return this._odometer;
      } else if (typeof distanceToDrive !== "number" || distanceToDrive <= 0 ) {
        output("Invalid distance, it has to be a positive number. No distance has been driven.");
        return this._odometer;
      } else {
      this._odometer = this._odometer + distanceToDrive;
      }
     return this._odometer;
    }
  }
 // script that instantiates and “drives” the cars as described.;
  const myCar = new car("Toyota", "Camry", 2025);
  myCar.startEngine();
  myCar.drive(100);
  myCar.stopEngine();
  myCar.startEngine();
  myCar.drive(50);
  myCar.stopEngine();
  output(`The odometer is now at ${myCar._odometer} km`);

//JSON string for myCar objec
  output (JSON.stringify(myCar));
}