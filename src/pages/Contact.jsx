import { useState } from 'react';
import './Contact.css'; // Import the CSS file for styling

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // To manage submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Console log the form data
    console.log('Form submitted:', form);

    // Reset form and status
    setStatus('Success!');
    setForm({ name: '', email: '', message: '' });
  };


  return (
    <div className="contact-container">
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send</button>
          {status && <p className="status-message">{status}</p>}
        </form>
        <div className="message-card">
          <h2>Contact Me</h2>
          <p>If you like the work that you see and are interested in collaborating on a project together, please fill out the form. This way we can get in touch and get to work. If you have any questions regarding my work and experience, you can also fill out this form and I will try my best to respond quickly.</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
