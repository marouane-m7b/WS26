import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Context";

export default function Home() {
  const navigate = useNavigate();
  const { user, handleLogout } = useAuth();

  const handleClick = () => {
    if (user) {
      handleLogout();
    } else {
      navigate("/login");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Home</h1>
      <button onClick={handleClick}>
        {user ? "Logout" : "Login"}
      </button>
    </div>
  );
}
