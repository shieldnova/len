import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    relation: '',
    phone: '',
    email: '',
    program: '',
    plan: '',
    city: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Lenka Academy Enquiry
-----------------------
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Program: ${formData.program}
Plan: ${formData.plan}
City: ${formData.city}
Notes: ${formData.notes}
Please guide me on the next steps.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/916303616940?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section id="contact" className='relative py-10 px-6'>
      <h2 className="text-center text-4xl font-extrabold bg-gradient-to-r from-brandColorOne via-brandColorTwo to-brandColorThree bg-clip-text text-transparent">
        Contact Us
      </h2>
      <p className="mt-2 max-w-3xl mx-auto text-gray-500 text-center">
        Fill out the form below and our team will reach out with your access details.
      </p>

      <div className="bg-white flex items-center justify-center px-6 py-16">
        <div className="max-w-3xl w-full bg-white shadow-xl rounded-3xl border border-gray-200 p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Apply / Request Demo</h2>
            <p className="text-gray-600 mt-2">
              We’ll contact you from <span className="font-semibold bg-gradient-to-r from-brandColorOne via-brandColorTwo to-brandColorThree bg-clip-text text-transparent">+91 6303616940</span> with access details.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Student/Parent</label>
              <input
                type="text"
                name="relation"
                value={formData.relation}
                onChange={handleChange}
                placeholder="Relationship"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Phone (WhatsApp)*</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your number"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 focus:outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Program*</label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-600 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                >
                  <option value="">Choose</option>
                  <option>Class 9</option>
                  <option>Class 10 Foundation</option>
                  <option>Class 11 JEE/Eamcet/Bitsat</option>
                  <option>Class 12 JEE/Eamcet/Bitsat</option>
                  <option>JEE Dropper</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Plan*</label>
                <select
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-600 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                >
                  <option value="">Select Plan</option>
                  <option>Zoom Blitz Live - ₹1,999/mo</option>
                  <option>App Stream Live - ₹299/mo</option>
                  <option>Concept Vault (Recorded) - ₹99/mo</option>
                  <option>Concept Vault (Recorded) - ₹999/mo</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Your city"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Anything we should know?</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="4"
                placeholder="Board, present scores, weak topics…"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 focus:outline-none"
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full hover:bg-pink-700 font-semibold py-3 rounded-lg shadow-md transition bg-gradient-to-r from-brandColorOne via-brandColorTwo to-brandColorThree text-white"
              >
                Submit
              </button>
              <p className="text-gray-500 text-sm text-center mt-3">We’ll never share your data.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
