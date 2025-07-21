import { useState } from "react";
import { useAuth } from "../context/Context";

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

  return (
    <form onSubmit={submit}>
      <h2>Inscription</h2>
      <input
        type="text"
        placeholder="Nom"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      {errors.name && <p>{errors.name[0]}</p>}

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      {errors.email && <p>{errors.email[0]}</p>}

      <input
        type="password"
        placeholder="Mot de passe"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      {errors.password && <p>{errors.password[0]}</p>}

      <input
        type="password"
        placeholder="Confirmer mot de passe"
        value={form.password_confirmation}
        onChange={(e) => setForm({ ...form, password_confirmation: e.target.value })}
      />

      <button type="submit">S'inscrire</button>
    </form>
  );
}
