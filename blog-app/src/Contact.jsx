// Contact.jsx
import React from "react";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Page</h1>
      <h2>Form</h2>
        <form>
          <label>Name:</label>
          <input type="text" name="name" placeholder='Enter your name' /><br />
          <br></br>
          <label>Email:</label>
          <input type="email" name="email" placeholder='Enter your email' /><br />
          <br></br>
          <label>Phone:</label>
          <input type="tel" name="phone" placeholder='Enter your phone number' /><br />
          <br></br>
          <label>Message:</label>
          <textarea name="message" placeholder='Enter your message'></textarea><br />
          <br></br>
          <button type="submit">Submit</button>
      </form>
      <p>You can reach us at: contact@example.com</p>
      <p>Phone: +91 98765 43210</p>
    </div>
  );
}

export default Contact;
