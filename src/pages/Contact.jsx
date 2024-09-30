import { useState } from 'react';
import './Contact.css'; // Import the CSS file for styling
import Swal from 'sweetalert2';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // To manage submission status
  const [loading, setLoading] = useState(false); // To manage loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state when submission starts
    setStatus("Sending...");

    const formData = new FormData();
    formData.append('access_key', '31b3dc4e-8360-4c19-8144-934aef8c2cfb'); // Your Web3Forms access key
    formData.append('From', form.name);
    formData.append('email', form.email);
    formData.append('message', form.message);

    try {
      // Submit the form using fetch to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json(); // Parse the response

      // Handle successful form submission
      if (data.success) {
        setStatus("Thank You! I will get back to you soon.");
        Swal.fire({
          title: "Good job!",
          text: "The Email has been sent successfully",
          icon: "success"
        });
        setForm({ name: '', email: '', message: '' }); // Reset the form on success
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        console.error("Error:", data);
        setStatus(`Error: ${data.message}`);
      }
    } catch (error) {
      // Handle errors
      console.error("Submission failed:", error);
      setStatus("Error submitting the form. Please try again later.");
    } finally {
      setLoading(false); // Reset loading state after submission is done
    }
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
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
          {status && <p className="status-message">{status}</p>}
        </form>
        <div className="message-card">
          <h2>Contact Me</h2>
          <p>
            If you like the work that you see and are interested in collaborating on a project together or If you have any questions regarding my work and experience, feel free to fill out this form and I will try my best to respond as quickly as possible. Thank You!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
