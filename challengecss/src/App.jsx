import './App.css'
import CarDetails from "./components/CarDetails"

function App() {
  const cars = [
    {id: 1, brand: "Ferrari", color: "Verde", km: 1000, newCar: false },
    {id: 2, brand: "Ford", color: "Azul", km: 0, newCar: true },
    {id: 3, brand: "VW-Gol", color: "Anarelo", km: 1500, newCar: false },
    {id: 4, brand: "VW-Fusca", color: "Branco", km: 0, newCar: true },
    {id: 5, brand: "Honda-Fit", color: "Prata", km: 0, newCar: true },
    {id: 6, brand: "Honda-City", color: "Preto", km: 0, newCar: true }
  ]

  return (
    <>
      <div>
          {/* reaproveitando com loop em array de objetos */}
          {cars.map((car) => (
            <CarDetails 
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
            newCar={car.newCar}
            />
            ))}

      </div>
    </>
  )
}

export default App
