import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">SAINT-LOIS</h1>
      <ul className="nav-links">
        <li>Home</li>
        <li>Collection</li>
        <li>Drop</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;