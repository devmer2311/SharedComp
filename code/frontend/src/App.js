// src/App.js
import React, { useState } from "react";
import SharedInput from "./SharedInput";

const App = () => {
  // Define form configuration
  const formFields = [
    { label: "Name", type: "text", name: "name" },
    { label: "Email", type: "email", name: "email" },
    { label: "Message", type: "textarea", name: "message" },
    {
      label: "Gender",
      type: "radio",
      name: "gender",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Other" },
      ],
    },
    {
      label: "Accept Terms & Conditions",
      type: "checkbox",
      name: "termsAccepted",
    },
  ];

  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    gender: "",
    termsAccepted: false, // Add initial state for T&C
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions to proceed.");
      return;
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div style={styles.app}>
      <h1 style={styles.header}>Shared Input Form</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        {formFields.map((field, index) => (
          <SharedInput
            key={index}
            field={field}
            value={formData[field.name]}
            onChange={handleChange}
          />
        ))}
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  app: {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
  form: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default App;
