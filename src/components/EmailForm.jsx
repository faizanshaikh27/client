// client/src/components/EmailForm.jsx
import React, { useState } from 'react';
import { sendEmail } from '../services/emailService';
import { toast } from 'react-toastify';
import '../styles/form.css';

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await sendEmail(formData);
      if (response.success) {
        toast.success('Email sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error('Failed to send email.');
      }
    } catch (err) {
      console.error(err);
      toast.error('Error sending email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="email-form">
      <h2>Send an Email</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
        <button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send'}</button>
      </form>
    </div>
  );
};

export default EmailForm;
