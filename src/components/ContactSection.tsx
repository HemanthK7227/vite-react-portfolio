import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import emailjs from 'emailjs-com';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send the form data via EmailJS
    emailjs
      .send(
        'service_2cjuqv7',    // Your EmailJS service ID
        'template_s3hxvjy',    // Your EmailJS template ID
        formData,              // Form data to send
        'TrMRDDZrvXBq8Ipqv'    // Your EmailJS User ID (replace with your actual User ID)
      )
      .then(
        (result) => {
          console.log('Message sent successfully:', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('Error sending message:', error.text);
          alert('Oops! Something went wrong. Please try again later.');
        }
      );

    // Clear form fields after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or want to discuss a data science opportunity? Feel free to reach out and I'll respond promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full text-indigo-600 mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <a
                    href="mailto:itshemanthkothapalli@gmail.com"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    itshemanthkothapalli@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full text-indigo-600 mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Phone</h4>
                  <a
                    href="tel:+19432216039"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    +1 (943) 221-6039
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full text-indigo-600 mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Location</h4>
                  <p className="text-gray-600">Atlanta, Georgia, USA</p>
                </div>
              </div>
            </div>

            {/* Social Links with Icons */}
            <div className="mt-10">
              <h4 className="font-medium text-gray-800 mb-4">Connect with Me</h4>
              <div className="flex flex-wrap gap-4">
                {[
                  {
                    name: 'LinkedIn',
                    href: 'https://www.linkedin.com/in/hemanth-k-027457190/',
                    icon: <Linkedin size={18} className="text-indigo-600" />
                  },
                  {
                    name: 'GitHub',
                    href: 'https://github.com/HemanthK7227',
                    icon: <Github size={18} className="text-indigo-600" />
                  },
                  {
                    name: 'Twitter',
                    href: 'https://x.com/imhemanth_kk',
                    icon: <Twitter size={18} className="text-indigo-600" />
                  }
                ].map(({ name, href, icon }, index) => (
                  <a
                    key={index}
                    href={href}
                    aria-label={`Visit my ${name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white hover:bg-indigo-50 border border-gray-200 text-gray-700 px-4 py-2 rounded-md transition duration-200"
                  >
                    {icon}
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              {[
                { label: 'Your Name', id: 'name', type: 'text' },
                { label: 'Email Address', id: 'email', type: 'email' },
                { label: 'Subject', id: 'subject', type: 'text' }
              ].map(({ label, id, type }) => (
                <div className="mb-4" key={id}>
                  <label htmlFor={id} className="block text-gray-700 mb-2">
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    name={id}
                    value={formData[id as keyof typeof formData]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              ))}

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                aria-label="Submit contact form"
                className="flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-md transition-colors duration-300"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
