/* Componetes importados */
import Foto2 from "./assets/imagens/img2.jpg"
import Foto3 from "./assets/imagens/img3.jpg"
import Foto4 from "./assets/imagens/img4.webp"
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";

/* Style importados */
import "./App.css";

function App() {

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
        </div>
      </div>
    </>
  )
}

export default App