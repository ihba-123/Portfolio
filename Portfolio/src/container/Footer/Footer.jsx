import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { images } from '../../constant';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (!name || !email || !message) {
      toast.error('Please fill in all fields!', { position: 'top-right' });
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address!', { position: 'top-right' });
      return;
    }

    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
        toast.success('Message sent successfully!', { position: 'top-right' });
      })
      .catch((err) => {
        console.error('Error submitting form:', err);
        setLoading(false);
        toast.error('Failed to send message. Please try again.', { position: 'top-right' });
      });
  };

  return (
    <>
      <ToastContainer />
      
      <h2 className="head-text"style={{color:"gray"}}>Chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:abhishekbhatta0.programmer@gmail.com" className="p-text" style={{fontSize:"15px", color:"black"}}>abhishekbhatta0.programmer@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+977 9745345419" className="p-text" style={{fontSize:"15px", color:"black"}}>+977 9745345419</a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input 
              className="p-text" 
              style={{fontSize:"15px", color:"black"}}
              type="text" 
              placeholder="Your Name" 
              name="name" 
              value={name} 
              onChange={handleChangeInput} 
            />
          </div>
          <div className="app__flex">
            <input 
              className="p-text" 
              style={{fontSize:"15px", color:"black"}}
              type="email" 
              placeholder="Your Email" 
              name="email" 
              value={email} 
              onChange={handleChangeInput} 
              required
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={handleChangeInput}
            />
          </div>
          <button 
            type="button" 
            className="p-text" 
            onClick={handleSubmit} 
            disabled={loading}
          >
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text"style={{color:'gray'}}>Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
