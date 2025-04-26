import React, { useState } from "react";
import "./ContactForm.css";
import { submitForm } from "./services/menu.service";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone_no, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Data Processing");
  const [message, setMessage] = useState("");
  const [promotion, setPromotion] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, phone_no, email, service, message, promotion };
    try {
      await submitForm(formData);
      alert("Form submitted successfully!");
      // Optionally clear form
      setName("");
      setPhoneNo("");
      setEmail("");
      setService("Data Processing");
      setMessage("");
      setPromotion(false);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <div className="left-panel">
          <h2>Send us a brief</h2>
          <p>Our team will get in touch with you within 10 Minutes!</p>
          <div className="icons-grid">
            {/* Dummy icons */}
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
          </div>
        </div>

        <form className="right-panel" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Mobile Number"
            value={phone_no}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="Data Processing">Data Processing</option>
            <option value="Web Development">Web Development</option>
            <option value="App Development">App Development</option>
          </select>
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="checkbox-container">
            <input
              type="checkbox"
              checked={promotion}
              onChange={(e) => setPromotion(e.target.checked)}
            />
            <label>I would like to receive promotional emails</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
