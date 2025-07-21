import { useAuth } from "../context/Context";
import Navbar from "../components/Navbar";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div>
      <Navbar />
      <div style={{ padding: '2rem', paddingTop: '6rem' }}>
        <h1>Profile</h1>
        <div style={{ 
          backgroundColor: 'white', 
          padding: '2rem', 
          borderRadius: '8px', 
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          maxWidth: '600px'
        }}>
          <h2>User Information</h2>
          <p><strong>Name:</strong> {user?.name || 'N/A'}</p>
          <p><strong>Email:</strong> {user?.email || 'N/A'}</p>
          <p><strong>Role:</strong> {user?.role || 'user'}</p>
        </div>
      </div>
    </div>
  );
}
