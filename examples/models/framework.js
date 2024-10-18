const mongoose = require('mongoose');

const frameworkSchema = new mongoose.Schema({
  language: { type: String, required: true },
  framework: { // Changed from frameworks to framework to match the JSON structure
    name: { type: String, required: true },
    documentationLink: { type: String, required: true }
  },
  tutorial: { // Changed from tutorials to tutorial to match the JSON structure
    title: { type: String, required: true },
    tutorialLink: { type: String, required: true },
    comments: [
      {
        user: { type: String, required: true },
        comment: { type: String, required: true },
        date: { type: Date, required: true } // Keep as Date for input
      }
    ]
  }
}, { collection: 'frameworks' });

const Framework = mongoose.model('Framework', frameworkSchema);

module.exports = Framework;
