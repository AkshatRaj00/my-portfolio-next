'use client';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    subject: '',
    message: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS Configuration
      const emailParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Akshat Raj', // Your name
      };

      // Replace with your EmailJS credentials
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
          template_id: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
          user_id: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
          template_params: emailParams,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        throw new Error('Email sending failed');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      
      // Auto-hide error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30, rotateX: -15 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'akshatraj@example.com',
      href: 'mailto:akshatraj@example.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 XXXXX XXXXX',
      href: 'tel:+91XXXXXXXXX'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Bhopal, India',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/80 via-gray-850/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 shadow-2xl overflow-hidden">
              
              {/* Form Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"></div>
              
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
              >
                <span className="text-3xl">💬</span>
                Send Message
              </motion.h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <motion.div variants={itemVariants} className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full bg-gray-700/50 border-2 border-gray-600 focus:border-purple-500 rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none transition-all duration-300 backdrop-blur-sm"
                    placeholder="Enter your full name"
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: focusedField === 'name' ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div variants={itemVariants} className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full bg-gray-700/50 border-2 border-gray-600 focus:border-purple-500 rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none transition-all duration-300 backdrop-blur-sm"
                    placeholder="your.email@example.com"
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: focusedField === 'email' ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Subject Input */}
                <motion.div variants={itemVariants} className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full bg-gray-700/50 border-2 border-gray-600 focus:border-purple-500 rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none transition-all duration-300 backdrop-blur-sm"
                    placeholder="Project Discussion / Collaboration"
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: focusedField === 'subject' ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Message Textarea */}
                <motion.div variants={itemVariants} className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className="w-full bg-gray-700/50 border-2 border-gray-600 focus:border-purple-500 rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none transition-all duration-300 backdrop-blur-sm resize-none"
                    placeholder="Tell me about your project, ideas, or how we can collaborate..."
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: focusedField === 'message' ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <span className="text-xl">🚀</span>
                          Send Message
                        </>
                      )}
                    </div>
                  </motion.button>
                </motion.div>

                {/* Status Messages */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`p-4 rounded-xl ${
                      submitStatus === 'success' 
                        ? 'bg-green-500/20 border border-green-500/50 text-green-400' 
                        : 'bg-red-500/20 border border-red-500/50 text-red-400'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <div className="flex items-center gap-2">
                        <span className="text-xl">✅</span>
                        Message sent successfully! I'll get back to you soon.
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="text-xl">❌</span>
                        Failed to send message. Please try again or contact me directly.
                      </div>
                    )}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-white mb-4">
                Let's Create Something Amazing! 🎯
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm always excited to work on innovative projects and collaborate with passionate people. Whether it's AI development, web applications, or creative solutions, let's turn your ideas into reality.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, x: 10 }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 group-hover:text-purple-400 transition-colors duration-300">
                      {method.label}
                    </p>
                    <p className="text-white font-medium">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div
              className="p-6 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30"
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(34, 197, 94, 0.1)",
                  "0 0 30px rgba(34, 197, 94, 0.2)",
                  "0 0 20px rgba(34, 197, 94, 0.1)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-3 h-3 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <div>
                  <p className="text-green-400 font-semibold">Available for Projects</p>
                  <p className="text-gray-300 text-sm">
                    Currently accepting new collaborations and freelance work
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;