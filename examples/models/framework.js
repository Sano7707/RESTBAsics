const mongoose = require('mongoose');

const frameworkSchema = new mongoose.Schema({
  language: { type: String, required: true },
  framework: { 
    name: { type: String, required: true },
    documentationLink: { type: String, required: true }
  },
  tutorial: {
    title: { type: String, required: true },
    tutorialLink: { type: String, required: true },
    comments: [
      {
        user: { type: String, required: true },
        comment: { type: String, required: true },
        date: { type: Date, required: true } 
      }
    ]
  }
}, { collection: 'frameworks' });

const Framework = mongoose.model('Framework', frameworkSchema);

module.exports = Framework;
