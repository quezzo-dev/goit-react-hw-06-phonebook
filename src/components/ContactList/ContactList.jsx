import s from "./ContactList.module.css";
import ContactListItem from "./ContactListItem/ContactListItem";
import { deleteContact } from "../../redux/contacts/contacts-actions";
import { useSelector, useDispatch } from "react-redux";

export default function ContactList() {
  const contacts = useSelector((state)=> state.contacts);
  const filter = useSelector((state)=> state.filter);
  const dispatch = useDispatch()

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact)=> 
    contact.name.toLowerCase().includes(normalizedFilter)
    )
  }
  const visibleContacts = getVisibleContacts();
  return (
    <ul className={s.list}>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onClick={() => dispatch(deleteContact(id))}
        />
      ))}
    </ul>
  );
}

