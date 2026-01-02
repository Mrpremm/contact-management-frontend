import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div className="container">
      <h2>Contact Management App</h2>
      <ContactForm />
      <ContactList />
    </div>
  );
}

export default App;