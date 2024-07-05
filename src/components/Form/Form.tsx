import React from "react";
import "./Form.scss";
import { Input } from "../Input/Input";
import Button from "../Buttons/Button/Button";

/**
 * * Form component, used for the contact form
 * * When user click on the submit button, the form data is logged to the console
 * @returns {JSX.Element} - Rendered Form component
 */

const Form = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="double_input">
            <div className="w-full">
              <Input
                required
                htmlFor="first-name"
                label="Förnamn"
                type="text"
                name="firstName"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full">
              <Input
                required
                htmlFor="last-name"
                label="Efternamn"
                type="text"
                name="lastName"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <Input
            required
            htmlFor="email"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleInputChange}
          />

          <Input
            required
            htmlFor="phone-number"
            label="Telefonnummer"
            type="tel"
            name="phoneNumber"
            autoComplete="tel-national"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />

          <div>
            <label htmlFor="message">Meddelande</label>
            <div className="input-container">
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                className="input__field"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <Button btnText="Skicka" onClick={() => handleSubmit} primary />
      </form>
    </>
  );
};

export default Form;
