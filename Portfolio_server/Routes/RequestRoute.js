const express = require('express');
const router = express.Router();
const Contact = require('../models/contact'); 

router.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    const contact = new Contact({ name, email, subject, message });
    await contact.save();

  

    res.status(200).json({ message: 'Message received successfully!' });
  } catch (error) {
    console.error('Contact form error:', error.message);
    res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
});

module.exports = router;
