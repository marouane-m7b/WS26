import { createContext, useContext, useEffect, useState } from "react";
import { axiosClient } from "../Api/AxiosClient";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../utils/toasts";

const Context = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getUser = async (role) => {
    try {
      const { data } = await axiosClient.get(`/${role}/profile`);
      setUser({ ...data, role });
      return true;
    } catch (err) {
      return false;
    }
  };

  const handleLogin = async (formData, role) => {
    try {
      const { data } = await axiosClient.post(`/${role}/login`, formData);
      localStorage.setItem("ud", JSON.stringify({ role, _token: data.token }));
      await getUser(role);
      successToast("Connexion réussie");
      navigate(`/${role}`);
    } catch (err) {
      errorToast("Erreur de connexion");
      setErrors(err.response?.data?.errors || {});
    }
  };

  const handleLogout = async () => {
    const { role } = JSON.parse(localStorage.getItem("ud")) || {};
    await axiosClient.post(`/${role}/logout`);
    localStorage.removeItem("ud");
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("ud"));
    if (session) getUser(session.role).then(() => setLoading(false));
    else setLoading(false);
  }, []);

  return (
    <Context.Provider value={{ user, handleLogin, handleLogout, errors, loading }}>
      {children}
    </Context.Provider>
  );
};

export const useAuth = () => useContext(Context);
