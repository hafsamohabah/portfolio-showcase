import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a href="#" className="logo">
        STUDIO<span>_</span>
      </a>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <a href="#work" onClick={() => setMenuOpen(false)}>
          Work
        </a>

        <a href="#add-project" onClick={() => setMenuOpen(false)}>
          Add Project
        </a>

        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>
      </nav>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}

export default Header;