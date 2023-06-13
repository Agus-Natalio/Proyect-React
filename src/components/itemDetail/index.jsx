import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from '../itemCount';
import DetailBtns from '../detailBtns';
import products from '../../assets/data/products.json';
import './itemDetail.css';

function MyVerticallyCenteredModal(props) {
  const{product, ...modalProps} = props;
  const image = require(`../../assets/images/${product.image}`);

  return (
    <Modal
      {...modalProps}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="modalHeader" closeButton>
      </Modal.Header>
      <Modal.Body className="modalBody">
        <Container>
        <Row>
          <Col sm={4}><img className="modalImg" src={image} alt={product.image} /></Col>
          <Col className="modalContent" sm={8}>
            <h3>{product.title}</h3>
            <h5>KaiHammer</h5>
            <br></br>
            <p>{product.desc}</p>         
            {product.stock < 10 ? (
              <p className="modalStock">¡Solo quedan {product.stock} unidades!</p>
            ) : (
              <p className="modalStock">Quedan {product.stock} unidades</p>
            )}
            <h5>$ {product.price}</h5>
            <br></br>  
            <ItemCount stock={product.stock}/>
            <br></br>
            <DetailBtns props={props}/>
          </Col>
        </Row>
      </Container>
      </Modal.Body>
      <Modal.Footer className="modalFooter">
        <Button className="modalBtn" onClick={props.onHide}>Se llevo mi chain de roque</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ItemDetail({ product }) {
  const [modalShow, setModalShow] = React.useState(false);

  const idCheck = () => {
    const productId = products.find((item) => item.id == product.id);
    if (productId) {
      setModalShow(true);
    }
  };

  return (
    <>
      <Button
        id={product.id}
        className="itemBtn"
        variant="primary"
        onClick={idCheck}
      >
        Ver detalle
      </Button>

      <MyVerticallyCenteredModal
        product={product}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ItemDetail;