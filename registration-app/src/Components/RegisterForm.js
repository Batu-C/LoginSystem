// src/components/RegisterForm.js
import React, { useState } from 'react';

const RegisterForm = () => {
  const [naam, setNaam] = useState('');
  const [wachtwoord, setWachtwoord] = useState('');
  const [type, setType] = useState('');

  const handleRegister = async () => {
    let user = {naam: naam, wachtwoord: wachtwoord,type: type};

    const response = await fetch('http://localhost:5267/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user) ,
    });

    if (response.ok) {
      console.log('Registratie succesvol');
    } else {
      console.error('Registratie mislukt');
    }
  };

  return (
    <div>
      <label>
        Naam:
        <input type="text" value={naam} onChange={(e) => setNaam(e.target.value)} />
      </label>
      <br />
      <label>
        Wachtwoord:
        <input type="password" value={wachtwoord} onChange={(e) => setWachtwoord(e.target.value)} />
      </label>
      <br />
      <label>
        Type:
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
      </label>
      <br />
      <button onClick={handleRegister}>Registreer</button>
    </div>
  );
};

export default RegisterForm;
