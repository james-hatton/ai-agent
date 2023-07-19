import React, { useState } from 'react';
import { Contact } from '../types/contact';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [contact, setContact] = useState<Contact>({ name: '', email: '', message: '' });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you would typically handle the submission, e.g., send the contact data to a server
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={contact.name} onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={contact.email} onChange={handleInputChange} />
        </label>
        <label>
          Message:
          <textarea name="message" value={contact.message} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;