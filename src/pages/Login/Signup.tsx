import React, { useState } from 'react';
import './Login.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isProfessional, setIsProfessional] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleIsProfessionalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsProfessional(e.target.checked);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(name, email, password, isProfessional)
  };

  return (
    <div>
      <div className="container max-w-md">
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
            <label htmlFor="isProfessional" className='flex items-center whitespace-nowrap hover:cursor-pointer'>Prestador de serviços?
              <input
                type="checkbox"
                id="isProfessional"
                checked={isProfessional}
                className='w-fit ml-3 hover:cursor-pointer'
                onChange={handleIsProfessionalChange}
              />
            </label>
          </div>
          <button type="submit">Cadastro</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;