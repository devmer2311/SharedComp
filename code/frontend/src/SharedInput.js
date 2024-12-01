// src/SharedInput.js
import React from "react";

const SharedInput = ({ field, value, onChange }) => {
  const { label, type, name, options } = field;

  return (
    <div style={styles.inputContainer}>
      {label && <label htmlFor={name} style={styles.label}>{label}</label>}
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          style={styles.textarea}
        />
      ) : type === "checkbox" ? (
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={value}
          onChange={onChange}
          style={styles.checkbox}
        />
      ) : type === "radio" ? (
        options.map((option, index) => (
          <div key={index} style={styles.radioGroup}>
            <input
              type="radio"
              id={`${name}-${option.value}`}
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              style={styles.radio}
            />
            <label htmlFor={`${name}-${option.value}`} style={styles.radioLabel}>
              {option.label}
            </label>
          </div>
        ))
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          style={styles.input}
        />
      )}
    </div>
  );
};

const styles = {
  inputContainer: {
    marginBottom: "15px",
  },
  label: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "5px",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "#f9f9f9",
    fontSize: "14px",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "#f9f9f9",
    fontSize: "14px",
    height: "80px",
    resize: "none",
  },
  checkbox: {
    marginRight: "10px",
  },
  radioGroup: {
    marginBottom: "5px",
  },
  radio: {
    marginRight: "8px",
  },
  radioLabel: {
    fontSize: "14px",
  },
};

export default SharedInput;
