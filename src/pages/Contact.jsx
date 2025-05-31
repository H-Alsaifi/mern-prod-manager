import { Card, Container } from "react-bootstrap";

function Contact() {
  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <Container className="d-flex justify-content-center">
        <Card className="p-4 shadow-sm" style={{ width: "100%", maxWidth: "500px" }}>
          <h4 className="mb-3 text-center">Contact Us</h4>
          <p><strong>Address:</strong> 123 React Street, UI City, CA 90210</p>
          <p><strong>Email:</strong> hello@prodmanage.com</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        </Card>
      </Container>
    </div>
  );
}

export default Contact;
