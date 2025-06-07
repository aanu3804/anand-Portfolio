import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.email || !formData.subject.trim() || !formData.message.trim()) {
      setError("All fields are required.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSending(true);

    const emailParams = {
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: "anandsai2004@gmail.com",
    };

    emailjs
      .send(
        "service_g75c4vv",
        "template_y66kwgv",
        emailParams,
        "TAaM-8S0e6GrGpLpS"
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ email: "", subject: "", message: "" });
      })
      .catch((error) => {
        alert("Failed to send message. Please try again.");
        console.error("EmailJS Error:", error);
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section className="py-12 px-4 mx-auto max-w-screen-md">
      <h2 className="text-4xl text-center font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
        Get in Touch
      </h2>
      <p className="mb-6 text-center text-lg text-white">
        I'm always open to discussing new opportunities, collaborations, or just having a friendly chat. 
        Feel free to reach out through LinkedIn, Email, or Phone, and I'll get back to you as soon as possible!
      </p>

      {/* Contact buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        <a href="https://www.linkedin.com/in/anandlattala/" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            LinkedIn
          </button>
        </a>
        <a href="mailto:anandsai2004@gmail.com">
          <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
            Email
          </button>
        </a>
        <a href="tel:+919110388960">
          <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition">
            Phone
          </button>
        </a>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div>
          <label htmlFor="email" className="block mb-1 text-white font-medium">Your Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 rounded-md bg-white text-black"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block mb-1 text-white font-medium">Subject</label>
          <input
            type="text"
            id="subject"
            className="w-full px-4 py-2 rounded-md"
            placeholder="Let us know how we can help you"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 text-white font-medium">Your Message</label>
          <textarea
            id="message"
            rows="5"
            className="w-full px-4 py-2 rounded-md"
            placeholder="Leave your message here"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white text-lg py-3 rounded-md hover:bg-purple-700 transition"
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Submit"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
