'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaCube, FaRobot, FaCloud } from 'react-icons/fa';

const categories = [
  { name: 'AI/ML Solution', icon: FaRobot, desc: 'For custom AI models and integrations' },
  { name: 'Web App', icon: FaLaptopCode, desc: 'For building websites, dashboards, and tools' },
  { name: 'Automation Script', icon: FaCube, desc: 'For automating repetitive tasks and workflows' },
  { name: 'Cloud Pipeline', icon: FaCloud, desc: 'For building and deploying ML pipelines on the cloud' },
];

const RequestWork = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    projectTitle: '',
    description: '',
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategorySelect = (categoryName) => {
    setFormData((prev) => ({ ...prev, category: categoryName }));
    nextStep();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // EmailJS or other form submission logic here
    alert('Request Submitted! (This form is not yet functional)');
    setFormData({
      name: '',
      email: '',
      category: '',
      projectTitle: '',
      description: '',
    });
    setStep(1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Select a category
            </h3>
            <p className="text-gray-400 text-center mb-8">What type of work are you looking for?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((cat, index) => (
                <motion.div
                  key={index}
                  onClick={() => handleCategorySelect(cat.name)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl cursor-pointer border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <cat.icon className="text-5xl text-purple-400 mb-4" />
                  <h4 className="text-xl font-semibold mb-1">{cat.name}</h4>
                  <p className="text-sm text-gray-400 text-center">{cat.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Project Details
            </h3>
            <input
              type="text"
              name="projectTitle"
              placeholder="Project Title"
              value={formData.projectTitle}
              onChange={handleChange}
              className="bg-transparent border-b-2 border-gray-600 focus:border-purple-500 text-white placeholder-gray-400 p-2 w-full outline-none transition-colors duration-300 mb-6"
            />
            <textarea
              name="description"
              placeholder="Detailed Project Description"
              value={formData.description}
              onChange={handleChange}
              rows={6}
              className="bg-transparent border-2 border-gray-600 focus:border-purple-500 text-white placeholder-gray-400 p-4 w-full outline-none transition-colors duration-300 rounded-lg"
            ></textarea>
            <div className="flex justify-between mt-8">
              <motion.button
                onClick={prevStep}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
              >
                Back
              </motion.button>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
              >
                Submit Request
              </motion.button>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="request-work" className="py-20 px-4 md:px-12 relative overflow-hidden">
      <div className="relative z-10 max-w-2xl mx-auto p-8 rounded-2xl shadow-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl">
        <form onSubmit={handleSubmit}>
          {renderStep()}
        </form>
      </div>
    </section>
  );
};

export default RequestWork;