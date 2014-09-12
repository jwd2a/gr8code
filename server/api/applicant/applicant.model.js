'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ApplicantSchema = new Schema({
  name: String,
  email: String,
  applicationDate: Date,
  status: String,
  notes: String,
  active: Boolean
});

module.exports = mongoose.model('Applicant', ApplicantSchema);