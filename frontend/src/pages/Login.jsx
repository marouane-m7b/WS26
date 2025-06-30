import { useState } from "react";
import { useAuth } from "../context/Context";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "", role: "admin" });
  const { handleLogin, errors } = useAuth();

  const submit = async (e) => {
    e.preventDefault();
    await handleLogin({ email: form.email, password: form.password }, form.role);
  };

  return (
    <form onSubmit={submit}>
      <h2>Connexion</h2>
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <select
        value={form.role}
        onChange={(e) => setForm({ ...form, role: e.target.value })}
      >
        <option value="admin">Admin</option>
        <option value="moderator">Modérateur</option>
        <option value="user">Utilisateur</option>
      </select>
      <button type="submit">Login</button>
      {errors.email && <p>{errors.email[0]}</p>}
      {errors.password && <p>{errors.password[0]}</p>}
    </form>
  );
}
