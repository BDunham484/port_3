import React, { useState, useRef } from 'react';
import { validateEmail } from '../../utils/helpers';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    const handleChange = e => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        };
        console.log('errorMessage: ', errorMessage);
    }
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     if (!errorMessage) {
    //         sendEmail();
    //         setFormState({ [e.target.name]: e.target.value });
    //         console.log('Form', formState);
    //     }
    // }
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_63e1zik', 'template_1zhznge', form.current, 'Imajd3lpsj1GkrWzP')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            console.log("Email Sent!");
        formReset(e);
    };

    const formReset = (e) => {
        console.log("formReset() has been called!")
        console.log(formState);
        setFormState({ name: '', email: '', message: '' });
        e.target.reset();
    }
    return (
        // <!-- CONTACT SECTION -->
        <section id="contact">
            <h2>
                CONTACT ME
            </h2>
            <div id="form-wrapper" >
                <form ref={form} id="contactForm" onSubmit={sendEmail}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" defaultValue={name} placeholder="Full Name" onChange={handleChange} name="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" defaultValue={email} placeholder="Email" onChange={handleChange} name="email" />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" defaultValue={message} placeholder="Message" onChange={handleChange} rows="8" />
                    </div>
                    {errorMessage && (
                        <div id="error-text">
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
};

export default Contact;