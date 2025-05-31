import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { BsPencilFill, BsTrashFill } from "react-icons/bs";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Noise cancelling over-ear headphones",
    price: 120,
    image: "https://images.unsplash.com/photo-1637780852590-8ab27248ec41"
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Smart wearable with health tracking",
    price: 80,
    image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26"
  },
  {
    id: 3,
    name: "Laptop",
    description: "14-inch Full HD display, 256GB SSD",
    price: 600,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
  }
];

function Products() {
  return (
    <Container className="mt-5">
      <div className="d-flex justify-content-end mb-3">
        <Button variant="primary">+ Add Product</Button>
      </div>
      <Row>
        {products.map(product => (
          <Col key={product.id} md={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={product.image}
                height="200px"
                style={{ objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <span style={{ color: '#007bff', fontWeight: 'bold' }}>${product.price}</span>
                  <div>
                    <BsPencilFill style={{ cursor: 'pointer', marginRight: '10px' }} />
                    <BsTrashFill style={{ cursor: 'pointer', color: 'red' }} />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
