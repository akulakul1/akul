import React, { useState } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const payload = {
      first: form.first.value,
      last: form.last.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("https://your-backend-domain.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok) {
        setFormStatus("✅ Message sent!");
        form.reset();
      } else {
        setFormStatus(`❌ Error: ${data.error || "Unknown error"}`);
      }
    } catch (error) {
      setFormStatus("❌ Network error. Please try again later.");
    }
  };

  return (
    <section className="min-h-screen bg-[#f9f9f9] px-4 md:px-24 py-16 flex flex-col md:flex-row gap-16">
      
      {/* Left Column - Contact Info */}
      <div className="md:w-1/2 pl-10 space-y-8 text-gray-700">
        <h2 className="text-5xl pb-3 font-bold text-black">Contact me</h2>
        <p className="text-base pb-6 text-gray-500 leading-relaxed">
          Massa urna margin dignissim in iaculis porttitor aliquet diam. Viverra at adipiscing sit morbi augue mauris porttitor nisl, senectus pharetra ac, porttitor orci.
        </p>

        <div className="space-y-6 pb-6 text-base">
          <div>
            <h4 className="font-semibold text-black text-lg">Location</h4>
            <p>1234 N Spring St, Los Angeles, CA 90012,<br />United States.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black text-lg">Phone</h4>
            <p>+01 - 123 456 7890</p>
          </div>

          <div>
            <h4 className="font-semibold text-black text-lg">Email</h4>
            <p>mail@example.com</p>
          </div>

          <div className="pt-4">
            <h4 className="font-semibold text-black mb-2 text-lg">Follow me:</h4>
            <div className="flex gap-6 text-2xl">
              <a href="#"><i className="fab fa-facebook-f text-gray-600 hover:text-black transition" /></a>
              <a href="#"><i className="fab fa-twitter text-gray-600 hover:text-black transition" /></a>
              <a href="#"><i className="fab fa-instagram text-gray-600 hover:text-black transition" /></a>
              <a href="#"><i className="fab fa-linkedin-in text-gray-600 hover:text-black transition" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Contact Form */}
      <div className="md:w-1/2 bg-white p-8 rounded-3xl shadow-lg transition-transform duration-300">
        <h3 className="text-xl font-semibold mb-6">Send a message</h3>
        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          <div className="flex gap-4">
            <input
              name="first"
              required
              type="text"
              placeholder="First"
              className="w-1/2 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition"
            />
            <input
              name="last"
              required
              type="text"
              placeholder="Last"
              className="w-1/2 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>
          <input
            name="email"
            required
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition"
          />
          <input
            name="subject"
            required
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition"
          />
          <textarea
            name="message"
            required
            placeholder="Comment or Message"
            rows="5"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition transform hover:-translate-y-1"
          >
            Send Message
          </button>
          {formStatus && (
            <p className="mt-4 text-sm text-green-600">{formStatus}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
