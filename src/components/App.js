import ContactList from "./ContactList/ContactList.jsx";
import Form from "./Form/Form.jsx";
import Filter from "./Filter/Filter.jsx";

export default function App() {
  // useEffect(() => {
  //   const contacts = JSON.parse(localStorage.getItem("contacts"));
  //   if (contacts) {
  //     setContacts(contacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
