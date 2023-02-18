import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const AddContact = (props) => {
  const [newContact, setNewContact] = useState({
    id: uuid(),
    name: '',
    email: '',
  });

  const add = (event) => {
    event.preventDefault();
    if (newContact.name === '' || newContact.email === '') {
      alert('Please enter all the information');
      return;
    }
    props.addContactHandler(newContact);
    setNewContact({
      name: '',
      email: '',
    });
  };

  return (
    <div className="ui Main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newContact.name}
            onChange={(event) => {
              setNewContact({
                ...newContact,
                name: event.target.value,
              });
            }}
          ></input>
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={newContact.email}
            onChange={(event) => {
              setNewContact({
                ...newContact,
                email: event.target.value,
              });
            }}
          ></input>
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
