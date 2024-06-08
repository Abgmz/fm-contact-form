import Form from "./components/Form";
import FormCheckbox from "./components/FormCheckbox";
import FormInput from "./components/FormInput";
import FormInputRadio from "./components/FormInputRadio";
import FormInputRadios from "./components/FormInputRadios";
import FormTextarea from "./components/FormTextarea";

function App() {
  return (
    <main>
      <Form>
        <div className="col-2">
          <FormInput
            type={"text"}
            classn={"contact-form_first-n"}
            val={"firstName"}
          >
            First Name *
          </FormInput>
          <FormInput
            type={"text"}
            classn={"contact-form_last-n"}
            val={"lastName"}
          >
            Last Name *
          </FormInput>
        </div>
        <FormInput type={"email"} classn={"contact-form_email"} val={"email"}>
          Email Address *
        </FormInput>
        <FormInputRadios>
          <FormInputRadio val={"generalEnquiry"} name={"queryType"}>
            General Enquiry
          </FormInputRadio>
          <FormInputRadio val={"supportRequest"} name={"queryType"}>
            Support Request
          </FormInputRadio>
        </FormInputRadios>
        <FormTextarea>Message *</FormTextarea>
        <FormCheckbox>I consent to being contacted by the team</FormCheckbox>
      </Form>
    </main>
  );
}

export default App;
