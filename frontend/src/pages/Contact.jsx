import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if all fields are filled
    if (formData.email.trim() === '' || formData.subject.trim() === '' || formData.message.trim() === '') {
      alert('Please fill out all fields.');
      return;
    }
    // Here you can perform any form submission logic, such as sending the data to a server
    setSubmitted(true);
  };

  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Got a technical issue? Want to send feedback about a beta feature? Let us know.
        </p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="email" className="from__label">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com" 
                className="form__input mt-1" 
              />
            </div>
            <div>
              <label htmlFor="subject" className="from__label">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Let us know how we can help you" 
                className="form__input mt-1" 
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="from__label">
                Your Message
              </label>
              <textarea
                rows="6"
                type="text" 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Leave a comment" 
                className="form__input mt-1" 
              />
            </div>
            <button type="submit" className="btn rounded sm:w-fit">Submit</button>
          </form>
        ) : (
          <div className="text-[18px] text-center text-green-600 font-semibold">
            Your message has been submitted successfully!
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
