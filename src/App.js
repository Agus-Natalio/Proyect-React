import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import ItemListContainer from './components/itemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <body className="backgroundImg">
        <Hero title="Hero" subtitle="Explora nuestras increibles ofertas" image="./assets/images/heroBG.jpg"/>
        <ItemListContainer/>
      </body>
    </div>
  );
};

export default App;
