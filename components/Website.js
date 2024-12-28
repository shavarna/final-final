'use client'  // Add this at the very top of the file

import React, { useState } from 'react';
import { Menu, X, ChevronDown, ChevronUp, Check, Mail, Phone, MapPin } from 'lucide-react';

// Rest of your component code stays exactly the same...

import React, { useState } from 'react';
import { Menu, X, ChevronDown, ChevronUp, Check, Mail, Phone, MapPin } from 'lucide-react';

const Website = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [expandedFaqs, setExpandedFaqs] = useState({});

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleFaq = (id) => {
    setExpandedFaqs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqs = [
    {
      id: 1,
      question: "What industries do you serve?",
      answer: "We specialize in automotive (ADAS, IVI, sensors), AI/ML accelerators, IoT and edge devices, and data center/cloud computing sectors."
    },
    {
      id: 2,
      question: "What certifications do you hold?",
      answer: "Our team maintains certifications in ISO standards, PCIe, and JEDEC specifications. We also have partnerships with major EDA tool providers."
    },
    {
      id: 3,
      question: "How do you protect client IP?",
      answer: "We implement robust NDAs and IP agreements, maintaining strict confidentiality and cybersecurity measures for all client projects."
    }
  ];

  const services = [
    {
      title: "IP Licensing",
      description: "Custom IP solutions and licensing services tailored to your specific needs"
    },
    {
      title: "Architecture Evaluation",
      description: "Comprehensive evaluation and optimization of semiconductor architectures"
    },
    {
      title: "Performance Benchmarking",
      description: "Detailed performance analysis and validation services"
    },
    {
      title: "Custom SoC Design",
      description: "End-to-end support for custom SoC development and implementation"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">CoreSilicon Consulting</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => setActiveSection('home')} className="hover:text-gray-300">Home</button>
              <button onClick={() => setActiveSection('services')} className="hover:text-gray-300">Services</button>
              <button onClick={() => setActiveSection('about')} className="hover:text-gray-300">About</button>
              <button onClick={() => setActiveSection('contact')} className="hover:text-gray-300">Contact</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                <button onClick={() => { setActiveSection('home'); toggleMenu(); }} className="py-2">Home</button>
                <button onClick={() => { setActiveSection('services'); toggleMenu(); }} className="py-2">Services</button>
                <button onClick={() => { setActiveSection('about'); toggleMenu(); }} className="py-2">About</button>
                <button onClick={() => { setActiveSection('contact'); toggleMenu(); }} className="py-2">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        {activeSection === 'home' && (
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold mb-4">Advanced Semiconductor Consulting Solutions</h1>
            <p className="text-xl text-gray-600 mb-8">Empowering innovation in automotive, AI/ML, and IoT technologies</p>
            <button onClick={() => setActiveSection('contact')} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>
        )}

        {/* Services Section */}
        {activeSection === 'services' && (
          <div className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <div className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
            <div className="space-y-6">
              <p className="text-gray-600">
                CoreSilicon Consulting brings together leading semiconductor architects and product managers
                to deliver cutting-edge solutions in IP licensing, architecture optimization, and custom SoC design.
              </p>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4">Our Expertise</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1" size={20} />
                    <span>Industry-standard certifications (ISO, PCIe, JEDEC)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1" size={20} />
                    <span>Partnerships with leading EDA tool providers</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1" size={20} />
                    <span>Extensive experience in automotive and AI/ML sectors</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            <div className="max-w-2xl mx-auto">
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <Mail className="text-blue-600 mr-4" size={24} />
                  <span>contact@coresilicon.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-blue-600 mr-4" size={24} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-blue-600 mr-4" size={24} />
                  <span>Silicon Valley, CA</span>
                </div>
              </div>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea className="w-full p-3 border rounded-lg h-32"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {activeSection === 'home' && (
          <div className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="border rounded-lg">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex justify-between items-center p-4 text-left"
                  >
                    <span className="font-medium">{faq.question}</span>
                    {expandedFaqs[faq.id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {expandedFaqs[faq.id] && (
                    <div className="p-4 pt-0 text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">CoreSilicon Consulting</h3>
              <p className="text-gray-400">Leading semiconductor consulting services for next-generation technologies</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => setActiveSection('services')} className="text-gray-400 hover:text-white">Services</button></li>
                <li><button onClick={() => setActiveSection('about')} className="text-gray-400 hover:text-white">About Us</button></li>
                <li><button onClick={() => setActiveSection('contact')} className="text-gray-400 hover:text-white">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">Silicon Valley, CA</p>
              <p className="text-gray-400">contact@coresilicon.com</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 CoreSilicon Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Website;
