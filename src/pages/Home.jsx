import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div style={{ 
      background: 'linear-gradient(to right, #6a11cb, #2575fc)',
      minHeight: '100vh',
      color: 'white',
      display: 'flex',
      alignItems: 'center'
    }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1>Welcome to ProdManage</h1>
            <p>
              Effortlessly manage your products with our all-in-one tool. Create, view,
              edit, and delete products — fast, simple, and reliable.
            </p>
            <Link to="/products">
              <Button variant="light">Explore Products</Button>
            </Link>

          </Col>
          <Col md={6}>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3050/3050525.png" 
              alt="Checklist" 
              style={{ maxWidth: '100%' }} 
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
