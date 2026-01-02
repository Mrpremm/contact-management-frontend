import { useEffect, useState } from "react";
import axios from "axios";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/contacts")
      .then(res => setContacts(res.data));
  }, []);

  const deleteHandler = async (id) => {
    await axios.delete(`http://localhost:5000/api/contacts/${id}`);
    setContacts(contacts.filter(c => c._id !== id));
  };

  return (
    <table>
      <thead>
        <tr><th>Name</th><th>Email</th><th>Phone</th><th>Action</th></tr>
      </thead>
      <tbody>
        {contacts.map(c => (
          <tr key={c._id}>
            <td>{c.name}</td>
            <td>{c.email}</td>
            <td>{c.phone}</td>
            <td><button onClick={() => deleteHandler(c._id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
