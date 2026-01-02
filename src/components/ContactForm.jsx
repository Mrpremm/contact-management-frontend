import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [error, setError] = useState("");

  const isValid = form.name && form.phone && (!form.email || /\S+@\S+\.\S+/.test(form.email));

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!isValid) return setError("Invalid input");

    await axios.post("http://localhost:5000/api/contacts", form);
    setForm({ name: "", email: "", phone: "", message: "" });
    window.location.reload();
  };

  return (
    <form onSubmit={submitHandler}>
      <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Phone" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
      <textarea placeholder="Message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
      {error && <p>{error}</p>}
      <button disabled={!isValid}>Submit</button>
    </form>
  );
}
