import { useState } from "react";
import api from "../api";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "buyer" });
  const [message, setMessage] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await api.post("/register", form);
      setMessage("Registration successful! Token: " + res.data.token);
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      const errorMessage = err.response ? err.response.data.message : "Network error or CORS issue";
      setMessage("Error: " + errorMessage);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <select name="role" onChange={handleChange}>
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>
        <button type="submit">Register</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Register;
