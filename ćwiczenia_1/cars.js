const cars = [
    { 
      id: 1,
      make: "BMW",
      model: "X5",
      year: 2021,
      color: "green"
    },

    { 
      id: 2,
      make: "Toyota",
      model: "Corolla",
      year: 2020,
      color: "purple"
    }
 
];

function getCars() {
    return cars;
};

function getCarInformation(id) {

    const id_car = cars.find(e => e.id === id);

    if (id_car) {
        const { make, model, year, color } = id_car;
        return `Make: ${make}, Model: ${model}, Year: ${year}, Color: ${color}.`;
    } else {
        return "Car doesn't exist.";
    }
};

function getCarAge(carId) {
    const car = cars.find(car => car.id === carId);
  
    if (car) {

      const currentYear = new Date().getFullYear();
      const carAge = currentYear - car.year;
      return `Car is ${carAge} years old.`;
    } else {
      return "Car doesnt exist";
    }
  }
  

console.log(getCars());
console.log(getCarInformation(2));
console.log(getCarAge(2)); 


module.exports = {getCars,getCarInformation,getCarAge};