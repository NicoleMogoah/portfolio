import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#edf4f3ff' }}>
      <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
      <Link to="/about" style={{ marginRight: '15px' }}>About</Link>
      <Link to="/projects" style={{ marginRight: '15px' }}>Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
