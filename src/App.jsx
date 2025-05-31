import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark px-3">
        <Link to="/" className="navbar-brand">ProdManager</Link>
        <div className="navbar-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
