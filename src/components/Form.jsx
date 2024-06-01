import { useForm } from "../hooks/useForm";
import SuccessMessageCard from "./SuccessMessageCard";

export default function Form() {
  const { handleSubmit, handleInput, errors, success, contact } = useForm();
  return (
    <div className="contact-form">
      <SuccessMessageCard success={success} />
      <h1 className="contact-form_title">Contact Us</h1>
      <form className="contact-form_controls" onSubmit={handleSubmit}>
        <div className="col-2">
          <div className="contact-form_first-n">
            <label
              htmlFor="firstName"
              className="contact-form_label m-b_d-block"
            >
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={contact.firstName}
              className={`contact-form_input ${
                errors.firstName ? "error-field" : ""
              }`}
              onChange={handleInput}
            />
            {errors.firstName && <span>{errors.firstName}</span>}
          </div>
          <div className="contact-form_last-n">
            <label
              htmlFor="lastName"
              className="contact-form_label m-b_d-block"
            >
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={contact.lastName}
              className={`contact-form_input ${
                errors.lastName ? "error-field" : ""
              }`}
              onChange={handleInput}
            />
            {errors.lastName && <span>{errors.lastName}</span>}
          </div>
        </div>
        <div className="contact-form_email">
          <label
            htmlFor="emailAddress"
            className="contact-form_label m-b_d-block"
          >
            Email Address *
          </label>
          <input
            className={`contact-form_input ${
              errors.email ? "error-field" : ""
            }`}
            type="text"
            name="email"
            id="emailAddress"
            value={contact.email}
            onChange={handleInput}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div className="contact-form_query">
          <h2 className="contact-form_label m-b_d-block">Query Type *</h2>
          <div className="col-2">
            <div
              className="contact-form_radio"
              style={
                contact.queryType === "generalEnquiry"
                  ? {
                      outline: "1px solid hsl(169, 82%, 27%)",
                      backgroundColor: "hsl(148, 38%, 91%)",
                    }
                  : {}
              }
            >
              <input
                type="radio"
                name="queryType"
                value="generalEnquiry"
                checked={contact.queryType === "generalEnquiry"}
                id="inputRadioGeneral"
                onChange={handleInput}
              />
              <label htmlFor="inputRadioGeneral" className="contact-form_label">
                General Enquiry
              </label>
            </div>
            <div
              className="contact-form_radio"
              style={
                contact.queryType === "supportRequest"
                  ? {
                      outline: "1px solid hsl(169, 82%, 27%)",
                      backgroundColor: "hsl(148, 38%, 91%)",
                    }
                  : {}
              }
            >
              <input
                type="radio"
                name="queryType"
                value="supportRequest"
                checked={contact.queryType === "supportRequest"}
                id="inputRadioSupport"
                onChange={handleInput}
              />
              <label htmlFor="inputRadioSupport" className="contact-form_label">
                Support Request
              </label>
            </div>
          </div>
          {errors.queryType && <span>{errors.queryType}</span>}
        </div>

        <div className="contact-form_message">
          <label htmlFor="message" className="contact-form_label m-b_d-block">
            Message *
          </label>
          <textarea
            className={`contact-form_input ${
              errors.message ? "error-field" : ""
            }`}
            name="message"
            id="message"
            value={contact.message}
            rows="4"
            onChange={handleInput}
          ></textarea>
          {errors.message && <span>{errors.message}</span>}
        </div>

        <div className="form-check">
          <div className="contact-form_check">
            <input
              type="checkbox"
              name="consent"
              id="consent"
              checked={contact.consent}
              onChange={handleInput}
            />
            <label htmlFor="consent" className="contact-form_label">
              I consent to being contacted by the team
            </label>
          </div>
          {errors.consent && <span>{errors.consent}</span>}
        </div>
        <button className="contact-form_submit">Submit</button>
      </form>
    </div>
  );
}
