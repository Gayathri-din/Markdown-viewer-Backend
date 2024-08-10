const Document = require('../models/Document');

// Get all documents
exports.getAllDocuments = async (req, res) => {
  try {
    const documents = await Document.find();
    res.json(documents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new document
exports.createDocument = async (req, res) => {
  const { title, content } = req.body;
  const document = new Document({ title, content });

  try {
    const newDocument = await document.save();
    res.status(201).json(newDocument);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get a single document by ID
exports.getDocumentById = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    if (document == null) {
      return res.status(404).json({ message: 'Document not found' });
    }
    res.json(document);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a document by ID
exports.updateDocument = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    if (document == null) {
      return res.status(404).json({ message: 'Document not found' });
    }

    if (req.body.title != null) {
      document.title = req.body.title;
    }
    if (req.body.content != null) {
      document.content = req.body.content;
    }

    const updatedDocument = await document.save();
    res.json(updatedDocument);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a document by ID
exports.deleteDocument = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    if (document == null) {
      return res.status(404).json({ message: 'Document not found' });
    }

    await document.remove();
    res.json({ message: 'Document deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
