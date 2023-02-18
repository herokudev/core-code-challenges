import React from 'react';
import user from '../images/user.png';

const ContactCard = (props) => {
  return (
    <div className="item">
      <img src={user} alt="user icon" className="ui avatar image" />
      <div className="content">
        <div className="header">{props.contact.name}</div>
        <div>{props.contact.email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        onClick={() => {
          props.removeContact(props.contact.id);
        }}
      />
    </div>
  );
};

export default ContactCard;
