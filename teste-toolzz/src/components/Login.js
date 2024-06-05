import React, { useState } from 'react';
import '../styles/Login.css';
import tzHead from '../images/TZ-Head.png';
import logo2 from '../images/logo2.png';
import logo2White from '../images/logo2-white.png'; 
import usuarioIcon from '../images/usuario-icon.png';
import senhaIcon from '../images/senha-icon.png';
import tzIcon from '../images/TZ-icon.png';
import tzIconWhite from '../images/tz-white.png'; 
import facebookIcon from '../images/Facebook-icon.png';
import facebookIconWhite from '../images/Facebook-white.png'; 
import appleIcon from '../images/apple-icon.png';
import appleIconWhite from '../images/apple-white.png'; 
import twitterIcon from '../images/x-icon.png';
import twitterIconWhite from '../images/twitter-white.png'; 
import captchaImage from '../images/captcha.png';
import entrarIcon from '../images/entrar-icon.png';

const LoginForm = ({ darkMode, toggleDarkMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Ocorreu um erro. Tente novamente mais tarde.');
    }
  };

  return (
    <div className={`login-page-container ${darkMode ? 'dark' : ''}`}>
      <div className="header">
        <div className="logo-container">
          <img src={tzHead} alt="Toolzz Logo" className="main-logo" />
          <img src={darkMode ? logo2White : logo2} alt="Toolzz" className="logo-text" />
        </div>
        <a href="#" className="create-account">Criar conta</a>
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <div className="login-form-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Boas-vindas!</h2>
          <p>Entre utilizando uma das opções abaixo</p>
          <div className="social-login">
            <button type="button" className="social-button">
              <img src={darkMode ? tzIconWhite : tzIcon} alt="Toolzz" />
            </button>
            <button type="button" className="social-button">
              <img src={darkMode ? facebookIconWhite : facebookIcon} alt="Facebook" />
            </button>
            <button type="button" className="social-button apple">
              <img src={darkMode ? appleIconWhite : appleIcon} alt="Apple" />
            </button>
            <button type="button" className="social-button">
              <img src={darkMode ? twitterIconWhite : twitterIcon} alt="Twitter" />
            </button>
          </div>
          <div className="separator">ou</div>
          <div className="input-container">
            <label>Usuário</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Usuário"
              className="user-input"
            />
          </div>
          <div className="input-container">
            <label>Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
              className="password-input"
            />
          </div>
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Manter conectado</label>
          </div>
          <div className="captcha">
            <img src={captchaImage} alt="CAPTCHA" />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="login-button">
            <img src={entrarIcon} alt="Entrar" />
            Entrar
          </button>
          <div className="forgot-password">
            <a href="#">Esqueceu sua senha?</a> | <a href="#">Recuperar senha</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
