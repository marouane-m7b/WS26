import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/Context";
import PrivateRoute from "./router/PrivateRoute";

import AdminPage from "./pages/admin";
import ModPage from "./pages/mod";
import UserPage from "./pages/user";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin" element={<AdminPage />} />
          </Route>

          <Route element={<PrivateRoute allowedRoles={["moderator"]} />}>
            <Route path="/moderator" element={<ModPage />} />
          </Route>

          <Route element={<PrivateRoute allowedRoles={["user"]} />}>
            <Route path="/user" element={<UserPage />} />
          </Route>

          <Route
            path="*"
            element={
                <h1>There's nothing here!</h1>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
