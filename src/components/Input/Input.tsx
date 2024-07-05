import React from "react";
import "./Input.scss";

/**
 * * Input component, used for text input fields
 * @param {string} label - The label for the input field
 * @param {string} htmlFor - Value of the for content property
 * @param {string} name - The name for the input field
 * @param {string} autoComplete - The autocomplete value for the input field
 * @param {string} value - The value for the input field
 * @param {string} type - The type for the input field
 * @param {boolean} required - If the input field is required
 * @param {function} onChange - The function to run when the input field changes
 * @returns {JSX.Element} - Rendered Input component
 *
 */

type Props = {
  label: string;
  htmlFor: string;
  name: string;
  autoComplete: string;
  value: string;
  type: string;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  label,
  htmlFor,
  type,
  name,
  autoComplete,
  value,
  onChange,
}: Props) => {
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <div className="input-container">
        <input
          required
          id={htmlFor}
          type={type}
          name={name}
          autoComplete={autoComplete}
          className="input__field"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
