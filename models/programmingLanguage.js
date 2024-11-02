const mongoose = require('mongoose');

const programmingLanguageSchema = new mongoose.Schema({
  name: String,
  information: String,
  releaseYear: Number,
  paradigm: [String],
  docs: [String]
}, { collection: 'programming_languages' });

const ProgrammingLanguage = mongoose.model('ProgrammingLanguage', programmingLanguageSchema);

module.exports = ProgrammingLanguage;
