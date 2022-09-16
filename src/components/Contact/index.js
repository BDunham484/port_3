import React from 'react';

const Contact = () => {
    return (
        // <!-- CONTACT SECTION -->
        <section id="contact">
            <h2>
                CONTACT ME
            </h2>
            <div id="form-wrapper" >
                <form >
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" rows="8" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
};

export default Contact;