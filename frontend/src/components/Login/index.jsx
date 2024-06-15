// src/components/Login/index.js
import React from 'react';

const Login = ({ onLogin }) => {
  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default Login;
