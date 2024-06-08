import check from "../assets/success-standard-svgrepo-com.svg";
import { useContext } from "react";
import { FormContext } from "./Form";
export default function SuccessMessageCard() {
  // eslint-disable-next-line react/prop-types
  const { success } = useContext(FormContext);

  return (
    <div className={`success-card ${success ? "active" : ""}`}>
      <div className="success-card_sent">
        <img src={check} alt="check ready" className="success-card_check" />
        <h2 className="success-card_title">Message Sent!</h2>
      </div>
      <p className="success-card_text">
        Thanks for completing the form. Well be in touch soon!
      </p>
    </div>
  );
}
