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

//define bonus transmission class
class transmission {
  constructor(transmissionType, gearCount) {
    this.transmissionType = transmissionType;
    this.gearCount = gearCount;
  }
  get transmissionType() {
    return this._transmissionType;
  }
  get gearCount() {
    return this._gearCount;
  }
  set transmissionType(transmissionType) {
    if (typeof transmissionType !== "string" || transmissionType.length < 1) {
      output("Invalid transmission type, it has to be a non-empty string. Defaulting to automatic transmission.");
      this._transmissionType = "automatic";
    } else { if (transmissionType === "automatic" || transmissionType === "manual") {
      this._transmissionType = transmissionType;
    } else {
      output("Invalid transmission type, it has to be either automatic or manual. Defaulting to automatic transmission.");
      this._transmissionType = "automatic";
    }
    }
  }  
  
  set gearCount(gearCount) {
    if (gearCount === "Park") {
      this._gearCount = "Park";}  
    else if (gearCount === "Neutral") {
      this._gearCount = "Neutral";      
    }
    else if (gearCount === "Reverse") {
      this._gearCount = "Reverse";
    }
    else if (typeof gearCount !== "number" || gearCount <= 0 || gearCount % 1 !== 0) {
      output("Invalid gear count, non park, neutral gear or reverse gear has to be a positive integer number. Defaulting to Park gear.");
      this._gearCount = "Park";
    } else {
      this._gearCount = gearCount;
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
      const myTransmission = new transmission("automatic", 6);
      this._transmission = myTransmission;
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

//define startEngine method with expection message
    startEngine() {
      if (this._engine.isRunning === true) {
        output("The engine is already running.");
        return this._engine.isRunning;
      } else {
            this._engine.isRunning = true;
      }
      return this._engine.isRunning;
    }
//define stopEngine method with expection message
    stopEngine() {
      if (this._engine.isRunning === false) {
        output("The engine is already stopped.");
        return this._engine.isRunning;
      } else {
            this._engine.isRunning = false;
      }
      return this._engine.isRunning;
    }
//define drive method with expection message
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