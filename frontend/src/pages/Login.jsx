import { useState } from "react";
import { useAuth } from "../context/Context";
import { Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "", role: "admin" });
  const { handleLogin, errors } = useAuth();

  const submit = async (e) => {
    e.preventDefault();
    await handleLogin(
      { email: form.email, password: form.password },
      form.role
    );
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

  const selectStyle = {
    ...inputStyle,
    backgroundColor: 'white',
    cursor: 'pointer'
  };

  const buttonStyle = {
    padding: '0.875rem',
    backgroundColor: '#007bff',
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
    margin: '0'
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
          <h2 style={titleStyle}>Connexion</h2>
          
          <div>
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              style={{
                ...inputStyle,
                borderColor: errors.email ? '#dc3545' : '#e1e5e9'
              }}
              onFocus={(e) => e.target.style.borderColor = '#007bff'}
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
              onFocus={(e) => e.target.style.borderColor = '#007bff'}
              onBlur={(e) => e.target.style.borderColor = errors.password ? '#dc3545' : '#e1e5e9'}
            />
            {errors.password && <p style={errorStyle}>{errors.password[0]}</p>}
          </div>

          <select
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            style={selectStyle}
          >
            <option value="admin">Admin</option>
            <option value="moderator">Modérateur</option>
            <option value="user">Utilisateur</option>
          </select>

          <button 
            type="submit" 
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
          >
            Se connecter
          </button>

          <p style={linkStyle}>
            Pas encore inscrit ? <Link to="/register" style={{ color: '#007bff', textDecoration: 'none' }}>Créer un compte</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
