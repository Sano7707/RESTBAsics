const mongoose = require('mongoose');

const langFrameworkSchema = new mongoose.Schema({
  language: { type: String, required: true },
  frameworks: [
    { type: String, required: true }
  ]
}, { collection: 'langFramework' });

const LangFramework = mongoose.model('LangFramework', langFrameworkSchema);

module.exports = LangFramework;
