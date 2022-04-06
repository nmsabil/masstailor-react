// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xrgjawwn");

  if (state.succeeded) {
    return (
      <form className='form' onSubmit={handleSubmit}>
        <div className='name-email-input'>
          <input
            required
            id='name'
            placeholder='Name'
            name='name'
            type='text'
          />
          <ValidationError prefix='name' field='name' errors={state.errors} />
          <input
            required
            id='email'
            placeholder='Email'
            name='email'
            type='email'
          />
          <ValidationError prefix='email' field='email' errors={state.errors} />
        </div>
        <div className='message'>
          <textarea
            required
            id='message'
            placeholder='Message'
            name='message'
            cols='40'
            rows='10'
          ></textarea>
          <ValidationError
            prefix='message'
            field='message'
            errors={state.errors}
          />
        </div>
        <div className='btn-container'>
          <p>
            <span>Success!</span> We will be in contact with you shortly
          </p>
          <button className='submit' disabled={state.submitting} type='submit'>
            Send
          </button>
        </div>
      </form>
    );
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='name-email-input'>
        <input required id='name' placeholder='Name' name='name' type='text' />
        <ValidationError prefix='name' field='name' errors={state.errors} />
        <input
          required
          id='email'
          placeholder='Email'
          name='email'
          type='email'
        />
        <ValidationError prefix='email' field='email' errors={state.errors} />
      </div>
      <div className='message'>
        <textarea
          required
          id='message'
          placeholder='Message'
          name='message'
          cols='40'
          rows='10'
        ></textarea>
        <ValidationError
          prefix='message'
          field='message'
          errors={state.errors}
        />
      </div>
      <div className='btn-container'>
        <button className='submit' disabled={state.submitting} type='submit'>
          Send
        </button>
      </div>
    </form>
  );
}
export default ContactForm;
