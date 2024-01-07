import React from "react";
import { useEffect } from "react";

const SelectedContact = ({ selectedContactId }) => {
  const [contact, setContact] = React.useState(null);
  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);
  console.log(contact);
  return (
    // <>{contact?.id}</>
    <div>
      <p>{contact?.address.street}</p>
      <p>{contact?.company.name}</p>
      <p>{contact?.email}</p>
      <p>{contact?.id}</p>
      <p>{contact?.name}</p>
      <p>{contact?.phone}</p>
      <p>{contact?.username}</p>
      <p>{contact?.website}</p>
    </div>
  );
};

export default SelectedContact;
