import React, { useState } from 'react';
import Rectangle129 from '../assets/rectangle129.jpeg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Form validation
    if (!name || !email || !message) {
      setModalMessage('Please fill in all required fields.');
      setShowModal(true);
      return;
    }

    try {
      const response = await fetch('https://server.thescamalicious.com/auth/contact-admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setModalMessage('Your message has been sent. We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
      } else {
        setModalMessage('Message not successful. Please try again.');
      }
    } catch (error) {
      setModalMessage('There was an error sending your message. Please try again.');
    } finally {
      setShowModal(true);
    }
  };

  return (
    <div className="lg:px-20 px-8 lg:py-14 py-8 text-[#252528] bg-[#FFF]">
      <div className="flex lg:flex-row flex-col w-full">
        <div className="lg:w-[60%] w-full lg:order-1 order-2 flex flex-col lg:items-start items-center">
          <h3 className="lg:text-start font-font2 lg:text-3xl text-2xl  w-full mb-4 font-semibold">Got a Question? Get in Touch—Scammers Hate It When We Team Up!</h3>
          <p className="lg:text-l text-[20px] font-font1 font-normal w-full">
          Whether you've got a query or just want to say hello, we’re all ears. We’re here to help and answer any questions you might have. If you don't get a reply immediately, we might be busy combating scammers, but we promise we'll get back to you as soon as possible. 
          </p>
          <div className='mt-6 w-full font-font1 font-normal'>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder='Name'
                required
                className='mb-2 border rounded-lg border-black w-full capitalize outline-none px-2 h-[35px]'
                value={formData.name}
                onChange={handleChange}
              /><br />
              <input
                type="email"
                name="email"
                placeholder='Email'
                required
                className='mb-2 border rounded-lg border-black w-full capitalize outline-none px-2 h-[35px]'
                value={formData.email}
                onChange={handleChange}
              /><br />
             
              <textarea
                name="message"
                placeholder='Message'
                required
                className='mb-2 border rounded-lg border-black w-full capitalize outline-none px-2 h-[75px]'
                value={formData.message}
                onChange={handleChange}
              />
              <button className="bg-yellow text-center text-[#202020] w-full h-[35px] border-yellow rounded-lg text-[16px] font-bold font-font1">Contact Us</button>
            </form>
          </div>
        </div>
        <img src={Rectangle129} alt="" className="lg:w-[70%] w-full h-full lg:mb-0 mb-6 lg:ml-14 ml-0 object-cover lg:order-2 order-1" />
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <p>{modalMessage}</p>
            <button
              className="mt-4 px-4 py-2 bg-yellow text-[#202020] rounded-lg"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;