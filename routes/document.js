

const express = require('express');
const router = express.Router();
const Document = require('../models/Document'); // Adjust path as necessary

// GET /api/documents
router.get('/', async (req, res) => {
  try {
    const documents = await Document.find();
    res.json(documents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/documents
router.post('/', async (req, res) => {
  const document = new Document({
    title: req.body.title,
    content: req.body.content
    
  });

  try {
    const newDocument = await document.save();
    res.status(201).json(newDocument);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
