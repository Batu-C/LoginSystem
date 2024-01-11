import React, { useState } from 'react';

const LoginForm = () => {
  const [naam, setNaam] = useState('');
  const [wachtwoord, setWachtwoord] = useState('');

  const handleLogin = async () => {
    // Voer hier de logica uit om in te loggen
    // bijvoorbeeld: een fetch-verzoek naar de inlog-API
    let userCredentials = {naam: naam, wachtwoord: wachtwoord};

    const response = await fetch('http://localhost:5267/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userCredentials),
    });

    if (response.ok) {
      console.log('Inloggen succesvol');
      // Voer hier de logica uit na een succesvolle inlogpoging
    } else {
      console.error('Inloggen mislukt');
      // Voer hier de logica uit na een mislukte inlogpoging
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
      <button onClick={handleLogin}>Inloggen</button>
    </div>
  );
};

export default LoginForm;
