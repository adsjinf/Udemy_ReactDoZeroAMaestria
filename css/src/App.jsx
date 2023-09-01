import { useState } from 'react';
import './App.css'
import MyComponents from './components/MyComponents'
import Title from './components/Title';


function App() {
  const n = 15;
  const [name] = useState("Matheus");
  const redTitle = false;

  return (
    <>
      <div className='App'>
        {/* CSS global */}
        <h1>React com CSS</h1>
        {/* CSS de componente */}
        <MyComponents />
        <p>Este parágrafo é do App.jsx</p>
        {/* CSS Inline */}
        <p style={{ color: 'magenta', padding: '25px', borderTop:'2px solid red'}}>
          Este elemento foi estilizado de forma inline</p>
        <p style={{ color: 'magenta', padding: '25px', borderTop:'2px solid red'}}>
          Este elemento foi estilizado de forma inline</p>
        {/* CSS Inline dinâmico */}
        <h2 style={n < 10 ? ({color: 'purple'}) : ({color: 'pink'})}>CSS dinâmico</h2>
        <h2 style={n > 10 ? ({color: 'purple'}) : ({color: 'pink'})}>CSS dinâmico</h2>
        <h2 style={name === "Matheus" ? ({color: 'purple', backgroundColor: '#000'}) : null}>Teste nome</h2>
        {/* CSS Inline dinâmico */}
        <h2 className={redTitle ? 'red-title' : 'title'}>Este titulo vai ter classe dinâmica</h2>
        {/* CSS Modules */}
        <Title />
        <h2 className='my-title'>Testando</h2>
      </div>
    </>
  )
}

export default App
