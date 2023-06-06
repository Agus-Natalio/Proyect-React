import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar';
import ItemCount from './components/itemCount';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <body className="backgroundImg">
        <ItemCount/>
      </body>
    </div>
  );
};

export default App;
