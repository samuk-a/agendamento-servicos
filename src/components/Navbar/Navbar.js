import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="navbar-brand">Barbearia</h1>
      <nav>
        <ul>
          <li><a href="/">Início</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/usuario">Usuário</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;