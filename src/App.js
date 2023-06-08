import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar';
import ItemListContainer from './components/itemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <body className="backgroundImg">
        <ItemListContainer/>
      </body>
    </div>
  );
};

export default App;
