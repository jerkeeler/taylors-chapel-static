import React, { useRef } from 'react';
import Recaptcha from 'react-google-recaptcha';

import {
  FormButton,
  FormGroup,
  Input,
  Label,
  Select,
  TextArea,
} from './inputs';

const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY;
if (typeof RECAPTCHA_KEY === 'undefined')
  throw new Error('Env var GATSBY_SITE_RECAPTCHA_KEY is undefined!');

const Contact = () => {
  const recaptchaRef = useRef();
  return (
    <form
      className="flex flex-col"
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
      action="/contact/success"
    >
      <input
        className="hidden"
        type="hidden"
        name="form-name"
        value="contact"
      />
      <input className="hidden" name="bot-field" />
      <FormGroup>
        <Label name="name">Name:</Label>
        <Input name="name" placeholder="Jane Doe" type="text" required />
      </FormGroup>
      <FormGroup>
        <Label name="email">Email:</Label>
        <Input name="email" placeholder="jane@doe.com" type="email" />
      </FormGroup>
      <FormGroup>
        <Label for="subject">Subject:</Label>
        <Select
          name="subject"
          options={['Booking', 'Business', 'General Inquiry']}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="message">Message:</Label>
        <TextArea
          name="message"
          placeholder="I love Taylor's Chapel!"
          required
        />
      </FormGroup>
      <FormGroup>
        <Recaptcha ref={recaptchaRef} sitekey={RECAPTCHA_KEY} />
      </FormGroup>
      <FormGroup>
        <FormButton>Submit</FormButton>
      </FormGroup>
    </form>
  );
};
export default Contact;
