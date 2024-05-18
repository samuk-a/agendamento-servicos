import React, { useState } from 'react';
import './Login.css';
import Navbar from '../../components/Navbar/Navbar';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isProfessional, setIsProfessional] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleIsProfessionalChange = (e) => {
    setIsProfessional(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Cadastro</h2>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="isProfessional">Prestador de serviços?</label>
            <input
              type="checkbox"
              id="isProfessional"
              checked={isProfessional}
              onChange={handleIsProfessionalChange}
            />
          </div>
          <button type="submit">Cadastro</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;