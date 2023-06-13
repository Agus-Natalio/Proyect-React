import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Hero from '../../components/hero';
import ItemListContainer from '../../components/itemListContainer';

function Bundles() {
  return (
      <div className="App">
        <hr className="divider"></hr>
        <body>
          <Hero title="¡Novedades en el escenario galactico!" image="../assets/images/heroBG.jpg"/>
          <hr className="divider"></hr>
          <div className = "bgContainer">
            <ItemListContainer selectedCategory="Bundles" />
          </div>
        </body>
      </div>
  );
};

export default Bundles;