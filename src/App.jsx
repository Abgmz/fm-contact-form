import Form from "./components/Form";

function App() {
  return (
    <main>
      <Form>
        <div className="col-2">
          <Form.Input
            type={"text"}
            classn={"contact-form_first-n"}
            val={"firstName"}
          >
            First Name *
          </Form.Input>
          <Form.Input
            type={"text"}
            classn={"contact-form_last-n"}
            val={"lastName"}
          >
            Last Name *
          </Form.Input>
        </div>
        <Form.Input type={"email"} classn={"contact-form_email"} val={"email"}>
          Email Address *
        </Form.Input>
        <Form.InputRadios>
          <Form.InputRadio val={"generalEnquiry"} name={"queryType"}>
            General Enquiry
          </Form.InputRadio>
          <Form.InputRadio val={"supportRequest"} name={"queryType"}>
            Support Request
          </Form.InputRadio>
        </Form.InputRadios>
        <Form.Textarea>Message *</Form.Textarea>
        <Form.Checkbox>I consent to being contacted by the team</Form.Checkbox>
      </Form>
    </main>
  );
}

export default App;
