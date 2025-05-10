import React from "react";

const Contact = () => {
  return (
    <section className="py-12 bg-white text-center px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="text-gray-700 max-w-3xl mx-auto mb-6">
        Have questions, feedback, or want to get in touch? Reach out to us
        anytime!
      </p>
      <div className="max-w-md mx-auto text-left space-y-4">
        <div>
          <label className="block font-medium">Your Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            className="w-full border p-2 rounded"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block font-medium">Message</label>
          <textarea
            className="w-full border p-2 rounded"
            rows="4"
            placeholder="Write your message here"
          ></textarea>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded">
          Send Message
        </button>
      </div>
    </section>
  );
};

export default Contact;
