import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const ContactForm = () => {
    const [formState, setFormState] = useState({ name: '', email:'', message:'' });
    const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({...formState, [e.target.value]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className = "container contact p-3">
            <h1 className='row display-1 justify-content-center' id='contact-title'>Contact me</h1>
            <form id="contact-form" className="row justify-content-center" onSubmit={handleSubmit}>
                <div className='row'>
                    <label htmlFor="name" className='font-weight-bold'>Name:</label>
                    <input type="text" name="name" defaultValue={name} onChange={handleChange}/>
                </div>
                <div className='row'>
                    <label htmlFor="email" className='font-weight-bold'>Email address:</label>
                    <input type="email" name="email" defaultValue={email}  onChange={handleChange}/>
                </div>
                <div className='row'>
                    <label htmlFor="message" className='font-weight-bold'>Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onChange={handleChange}/>
                </div>
                <div className="row justify-content-center">
                    <button className="btn" id="contact-button" type="submit">Submit</button>
                </div>
            </form>
            <p className="row justify-content-center pt-3">sydney.walcoff@gmail.com</p>
        </section>  
    );
};

export default ContactForm;