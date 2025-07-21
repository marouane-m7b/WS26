import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Context";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, handleLogout } = useAuth();

  const handleAuthAction = () => {
    if (user) {
      handleLogout();
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #dee2e6',
      zIndex: 1000,
      boxSizing: 'border-box'
    }}>
      <div>
        <button 
          onClick={handleHome}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: '#007bff'
          }}
        >
          Home
        </button>
      </div>
      
      <div style={{ display: 'flex', gap: '1rem' }}>
        {user ? (
          <>
            <span style={{ alignSelf: 'center', marginRight: '1rem' }}>
              Welcome, {user.name || user.email || 'User'}
            </span>
            <button 
              onClick={handleAuthAction}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button 
              onClick={handleAuthAction}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                marginRight: '0.5rem'
              }}
            >
              Login
            </button>
            <button 
              onClick={handleRegister}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Register
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
