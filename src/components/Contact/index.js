import React from 'react';

const ContactForm = () => {
    return (
        <section className = "container contact p-3">
            <h1 className='row display-1 justify-content-center' id='contact-title'>Contact me</h1>
            <form id="contact-form" className="row justify-content-center">
                <div className='row'>
                    <label htmlFor="name" className='font-weight-bold'>Name:</label>
                    <input type="text" name="name" />
                </div>
                <div className='row'>
                    <label htmlFor="email" className='font-weight-bold'>Email address:</label>
                    <input type="email" name="email" />
                </div>
                <div className='row'>
                    <label htmlFor="message" className='font-weight-bold'>Message:</label>
                    <textarea name="message" rows="5"  />
                </div>
            </form>
        </section>  
    );
};

export default ContactForm;