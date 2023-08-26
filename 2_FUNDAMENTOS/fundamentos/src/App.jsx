// components
import FistComponent from "./assets/components/FirstComponents";
import TemplateExpressions from "./assets/components/TempleteExpressions";
import MyComponents from "./assets/components/MyComponents";
import Events from "./assets/components/Events";
import Challege from  "./assets/components/Challenge"

// style / css
import './App.css'


function App() {

  return (
    <div className='App'>
      <h1>Fundamentos React</h1>
      <h4><FistComponent /></h4>
      <h5><TemplateExpressions /></h5>
      <MyComponents />
      <Events />
      <Challege  />
    </div>
  );
}

export default App
