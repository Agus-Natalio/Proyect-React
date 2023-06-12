import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import ItemListContainer from './components/itemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar/>
        </header>
        <hr className="divider"></hr>
        <body>
          <Hero title="¡Novedades en el escenario galactico!" image="./assets/images/heroBG.jpg"/>
          <hr className="divider"></hr>
          <div className = "bgContainer">
            <ItemListContainer/>
          </div>
        </body>
      </div>   
      <Routes>
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
