import { useState } from "react";
import { useAuth } from "../context/Context";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const { handleRegister, errors } = useAuth();

  const submit = async (e) => {
    e.preventDefault();
    await handleRegister(form);
  };

  const containerStyle = {
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#f5f5f5',
    padding: '0'
  };

  const formStyle = {
    backgroundColor: 'white',
    padding: '3rem',
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box'
  };

  const formContentStyle = {
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: '1rem'
  };

  const inputStyle = {
    padding: '0.875rem',
    border: '2px solid #e1e5e9',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease',
    outline: 'none'
  };

  const buttonStyle = {
    padding: '0.875rem',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  const errorStyle = {
    color: '#dc3545',
    fontSize: '0.875rem',
    margin: '0.25rem 0 0 0'
  };

  const linkStyle = {
    textAlign: 'center',
    color: '#666',
    fontSize: '0.9rem'
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={submit} style={formStyle}>
        <div style={formContentStyle}>
          <h2 style={titleStyle}>Inscription</h2>
          
          <div>
            <input
              type="text"
              placeholder="Nom complet"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={{
                ...inputStyle,
                borderColor: errors.name ? '#dc3545' : '#e1e5e9'
              }}
              onFocus={(e) => e.target.style.borderColor = '#28a745'}
              onBlur={(e) => e.target.style.borderColor = errors.name ? '#dc3545' : '#e1e5e9'}
            />
            {errors.name && <p style={errorStyle}>{errors.name[0]}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="Adresse email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              style={{
                ...inputStyle,
                borderColor: errors.email ? '#dc3545' : '#e1e5e9'
              }}
              onFocus={(e) => e.target.style.borderColor = '#28a745'}
              onBlur={(e) => e.target.style.borderColor = errors.email ? '#dc3545' : '#e1e5e9'}
            />
            {errors.email && <p style={errorStyle}>{errors.email[0]}</p>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Mot de passe"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              style={{
                ...inputStyle,
                borderColor: errors.password ? '#dc3545' : '#e1e5e9'
              }}
              onFocus={(e) => e.target.style.borderColor = '#28a745'}
              onBlur={(e) => e.target.style.borderColor = errors.password ? '#dc3545' : '#e1e5e9'}
            />
            {errors.password && <p style={errorStyle}>{errors.password[0]}</p>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Confirmer le mot de passe"
              value={form.password_confirmation}
              onChange={(e) => setForm({ ...form, password_confirmation: e.target.value })}
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = '#28a745'}
              onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
            />
          </div>

          <button 
            type="submit" 
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = '#1e7e34'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
          >
            S'inscrire
          </button>

          <p style={linkStyle}>
            Déjà inscrit ? <Link to="/login" style={{ color: '#007bff', textDecoration: 'none' }}>Se connecter</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
