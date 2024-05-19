import { useContext } from "react";
import "./Navbar.css";
import { BridgeGuardContext } from "../../context/BridgeGuard";

function Navbar() {

  const {
    isToShow,
    handleLougout
  } = useContext(BridgeGuardContext)

  return (
    <div className="navbar mb-8">
      <h1 className="navbar-brand">Barbearia</h1>
      <nav>
        <ul>
          <li><a href="/">Início</a></li>
          {isToShow && <li><a href="/availableTime">Cadastrar</a></li>}
          {isToShow && <li><a href="/admin" >Usuário</a></li>}

          {isToShow && <li><button className="p-0" onClick={handleLougout}>Logout</button></li>}
          {!isToShow && <li><a href="/login">Login</a></li>}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;