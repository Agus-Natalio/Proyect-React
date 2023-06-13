import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/home/';
import Dices from './pages/dices';
import Tabletops from './pages/tabletops';
import Bundles from './pages/bundles';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar/>
        </header>
      </div>   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dices" element={<Dices />} />
        <Route path="/tabletops" element={<Tabletops />} />
        <Route path="/bundles" element={<Bundles />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
