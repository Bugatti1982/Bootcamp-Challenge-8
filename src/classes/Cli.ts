// importing classes from other files
import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";

// define the Cli class
class Cli {
  // TODO: update the vehicles property to accept Truck and Motorbike objects as well
  // TODO: You will need to use the Union operator to define additional types for the array
  // TODO: See the AbleToTow interface for an example of how to use the Union operator
  vehicles: (Car | Truck | Motorbike)[];
  selectedVehicleVin: string | undefined;
  exit: boolean = false;

  // TODO: Update the constructor to accept Truck and Motorbike objects as well
  constructor(vehicles: (Car |Truck | Motorbike)[]) {
    this.vehicles = vehicles;
  }

  // static method to generate a vin
  static generateVin(): string {
    // return a random string
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  // method to choose a vehicle from existing vehicles
  chooseVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'selectedVehicleVin',
          message: 'Select a vehicle to perform an action on',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle.vin,
            };
          }),
        },
      ])
      .then((answers) => {
        // set the selectedVehicleVin to the vin of the selected vehicle
        this.selectedVehicleVin = answers.selectedVehicleVin;
        // perform actions on the selected vehicle
        this.performActions();
      });
  }

  // method to create a vehicle
  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleType',
          message: 'Select a vehicle type',
          // TODO: Update the choices array to include Truck and Motorbike
          choices: ['Car', 'Truck', 'Motorbike'],
        },
      ])
      .then((answers) => {
        if (answers.vehicleType === 'Car') {
          // create a car
          this.createCar();
        }
        // TODO: add statements to create a truck or motorbike if the user selects the respective vehicle type
      });
  }

  // method to create a car
  createCar(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
      ])
      .then((answers) => {
        const car = new Car(
          // TODO: The generateVin method is static and should be called using the class name Cli, make sure to use Cli.generateVin() for creating a truck and motorbike as well!
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          []
        );

        const motorbike = new Motorbike(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          []
        );
        // push the car to the vehicles array
        this.vehicles.push(car);
        // set the selectedVehicleVin to the vin of the car
        this.selectedVehicleVin = car.vin;
        // perform actions on the car
        this.performActions();
        // TODO: The generateVin method is static and should be called using the class name Cli, make sure to use Cli.generateVin() for creating a truck and motorbike as well!
      });
  }

  // method to create a truck
  createTruck(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'towingCapacity',
          message: 'Enter Towing Capacity',
        },
      ])
      .then((answers) => {
  // TODO: Use the answers object to pass the required properties to the Truck constructor
  const truck = new Truck(
    Cli.generateVin(),        
    answers.color,            
    answers.make,             
    answers.model,            
    parseInt(answers.year),  
    parseInt(answers.weight),
    parseInt(answers.topSpeed), 
    [],                       
    parseInt(answers.towingCapacity) 
  );

  // TODO: push the truck to the vehicles array
  this.vehicles.push(truck);

  // TODO: set the selectedVehicleVin to the vin of the truck
  this.selectedVehicleVin = truck.vin;

  // TODO: perform actions on the truck
  truck.printDetails(); 
});
  }

  // method to create a motorbike
  createMotorbike(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'frontWheelDiameter',
          message: 'Enter Front Wheel Diameter',
        },
        {
          type: 'input',
          name: 'frontWheelBrand',
          message: 'Enter Front Wheel Brand',
        },
        {
          type: 'input',
          name: 'rearWheelDiameter',
          message: 'Enter Rear Wheel Diameter',
        },
        {
          type: 'input',
          name: 'rearWheelBrand',
          message: 'Enter Rear Wheel Brand',
        },
      ])
    .then((answers) => {
  // TODO: Use the answers object to pass the required properties to the Motorbike constructor
  const motorbikeWheels = [
    new Wheel(parseInt(answers.wheelSize), answers.wheelBrand), 
    new Wheel(parseInt(answers.wheelSize), answers.wheelBrand),
  ];

  const motorbike = new Motorbike(
    Cli.generateVin(),           
    answers.color,               
    answers.make,                
    answers.model,               
    parseInt(answers.year),      
    parseInt(answers.weight),    
    parseInt(answers.topSpeed), 
    motorbikeWheels              
  );

  // TODO: push the motorbike to the vehicles array
  this.vehicles.push(motorbike);

  // TODO: set the selectedVehicleVin to the vin of the motorbike
  this.selectedVehicleVin = motorbike.vin;

  // TODO: perform actions on the motorbike
  motorbike.printDetails(); 
  motorbike.wheelie();      
  
});
  }

  // method to find a vehicle to tow
  // TODO: add a parameter to accept a truck object
  findVehicleToTow(truck: Truck): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleToTow',
          message: 'Select a vehicle to tow',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle,
            };
          }),
        },
      ])
      .then((answers) => {
  const selectedVehicle = answers.vehicleToTow;

  // TODO: check if the selected vehicle is the truck
  // TODO: if it is, log that the truck cannot tow itself then perform actions on the truck to allow the user to select another action
  if (selectedVehicle.vin === truck.vin) {
    console.log("The truck cannot tow itself.");
    
    truck.printDetails(); 

  } else {
    // TODO: if it is not, tow the selected vehicle then perform actions on the truck to allow the user to select another action
    truck.tow(selectedVehicle);
    
    truck.printDetails();
  }
})
.catch((error) => {
  console.error("An error occurred during the towing process:", error);
});
  }

  // method to perform actions on a vehicle
  performActions(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Select an action',
          // TODO: add options to tow and wheelie
          choices: [
            'Print details',
            'Start vehicle',
            'Accelerate 5 MPH',
            'Decelerate 5 MPH',
            'Stop vehicle',
            'Turn right',
            'Turn left',
            'Reverse',
            'Tow vehicle',
            'Perform wheelie',
            'Select or create another vehicle',
            'Exit',
          ],
        },
      ])
      .then((answers) => {
  const selectedVehicle = this.vehicles.find(vehicle => vehicle.vin === this.selectedVehicleVin);

  if (!selectedVehicle) {
    console.log('Selected vehicle not found.');
    return;
  }

  // Perform the selected action
  switch (answers.action) {
    case 'Print details':
      selectedVehicle.printDetails();
      break;

    case 'Start vehicle':
      selectedVehicle.start();
      break;

    case 'Accelerate 5 MPH':
      selectedVehicle.accelerate(5);
      break;

    case 'Decelerate 5 MPH':
      selectedVehicle.decelerate(5);
      break;

    case 'Stop vehicle':
      selectedVehicle.stop();
      break;

    case 'Turn right':
      selectedVehicle.turn('right');
      break;

    case 'Turn left':
      selectedVehicle.turn('left');
      break;

    case 'Reverse':
      selectedVehicle.reverse();
      break;
    // TODO: add statements to perform the tow action only if the selected vehicle is a truck. Call the findVehicleToTow method to find a vehicle to tow and pass the selected truck as an argument. After calling the findVehicleToTow method, you will need to return to avoid instantly calling the performActions method again since findVehicleToTow is asynchronous.
    case 'Tow vehicle':
      if (selectedVehicle instanceof Truck) {
        // Perform the tow action only if the selected vehicle is a truck
        this.findVehicleToTow(selectedVehicle);
        return; // Return to avoid calling performActions again immediately
      }
      console.log('Selected vehicle is not a truck.');
      break;
    // TODO: add statements to perform the wheelie action only if the selected vehicle is a motorbike
    case 'Perform wheelie':
      if (selectedVehicle instanceof Motorbike) {
        // Perform the wheelie action only if the selected vehicle is a motorbike
        selectedVehicle.wheelie();
      } else {
        console.log('Selected vehicle is not a motorbike.');
      }
      break;

    case 'Select or create another vehicle':
      // Start the CLI to return to the initial prompt if the user wants to select or create another vehicle
      this.startCli();
      return;

    case 'Exit':
      // Exit the CLI if the user selects exit
      this.exit = true;
      break;

    default:
      console.log('Invalid action selected.');
      break;
  }

  // If the user does not want to exit, perform actions on the selected vehicle
  if (!this.exit) {
    this.performActions();
  }
})
.catch((error) => {
  console.error("An error occurred:", error);
});
  }

  // method to start the cli
  startCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'CreateOrSelect',
          message:
            'Would you like to create a new vehicle or perform an action on an existing vehicle?',
          choices: ['Create a new vehicle', 'Select an existing vehicle'],
        },
      ])
      .then((answers) => {
        // check if the user wants to create a new vehicle or select an existing vehicle
        if (answers.CreateOrSelect === 'Create a new vehicle') {
          this.createVehicle();
        } else {
          this.chooseVehicle();
        }
      });
  }
}

// export the Cli class
export default Cli;
