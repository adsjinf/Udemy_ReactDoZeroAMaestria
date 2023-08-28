/* Componetes importados */
import { useState } from "react";
import Foto2 from "./assets/imagens/img2.jpg"
import Foto3 from "./assets/imagens/img3.jpg"
import Foto4 from "./assets/imagens/img4.webp"
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import CondicionalRender from "./components/condicionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";

/* Style importados */
import "./App.css";
import Container from "./components/Container";
import ExecuteFunctions from "./components/ExecuteFunctions";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

function App() {
  const [userName] = useState("Maria");

  const cars = [
    {id: 1, brand: "Ferrari", color: "Verde", km: 1000, newCar: false },
    {id: 2, brand: "Ford", color: "Azul", km: 0, newCar: true },
    {id: 3, brand: "VW-Gol", color: "Anarelo", km: 1500, newCar: false },
    {id: 4, brand: "VW-Fusca", color: "Branco", km: 0, newCar: true },
    {id: 5, brand: "Honda-Fit", color: "Prata", km: 0, newCar: true },
    {id: 6, brand: "Honda-City", color: "Preto", km: 0, newCar: true }
  ]
  const peoples = [
    {id: 1, nome: "José Ismael", profissao: "Dev", idade: 58 },
    {id: 2, nome: "Carlos", profissao: "Motorista", idade: 24 },
    {id: 3, nome: "Diogo", profissao: "Motorista", idade: 12 },
    {id: 4, nome: "Cleonice", profissao: "Advogada", idade: 67 },
    {id: 5, nome: "Francisca", profissao: "DoLar", idade: 72 },
    {id: 6, nome: "Lina", profissao: "Professora", idade: 21 },
    {id: 7, nome: "Ferreira", profissao: "Estudante", idade: 15 },
  ]

function showMenssage(){
  console.log("Evento do componente pai!");
}

const [message, setMessage] = useState("");

const handleMessage =(msg) => {
  setMessage(msg);
};

  return (
    <>
      <div>
        <h1>Avançando em React</h1>
        {/* Imagens em public */}
        <div>
          <img src="/imagens/img1.jpg" alt="Paisagem" />
        </div>
        {/* Imagens em assets */}
        <div>
          <img src={Foto2} alt="Paisagem" />
          <img src={Foto3} alt="Paisagem" />
          <img src={Foto4} alt="Paisagem" />
        </div>
        <div>
          <ManageData />
        </div>
        <div>
          <ListRender />
          <CondicionalRender />
          {/* props */}
          <ShowUserName name={userName} />
          {/* destructuring */}
          <CarDetails brand="VW" km={100000} color="Verde" newCar={false} />
          {/* reaproveitando */}
          <CarDetails brand="Ford" color="Vermelho" km={0} newCar={true} />
          <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false} />
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
          {/* Fragments */}
          <Fragment propFragment="teste"/>
          {/* children */}
          <Container myValue="Teste">
            <p>E este é o contúdo</p>
          </Container>
          <Container myValue="Teste 2">
            <h5>Testando o container</h5>
          </Container>
          {/* executar função */}
          <ExecuteFunctions myFunction={showMenssage} />
          {/* state lift */}
          <Message msg={message}/>
          <ChangeMessageState handleMessage={handleMessage}/>
          {/* solução do desafio 4 */}
          {peoples.map((people) => (
            <UserDetails 
            key={people.id}
            nome={people.nome}
            profissao={people.profissao}
            idade={people.idade}
            />
            ))}

        </div>
      </div>
    </>
  )
}

export default App