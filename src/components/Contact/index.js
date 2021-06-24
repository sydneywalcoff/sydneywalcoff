import React from 'react';

const ContactForm = () => {
    return (
        <section className = "container">
            <h1 className='display-1 justify-content-center'>Contact me</h1>
            <form id="contact-form" >
                <div className='row'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" />
                </div>
                <div className='row'>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" />
                </div>
                <div className='row'>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5"  />
                </div>
            </form>
        </section>  
    );
};

export default ContactForm;