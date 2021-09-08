const mongoose = require("mongoose");


const schema = new mongoose.Schema({
    description: {
      type: String,
      trim: true
    },
    formNumber: {
      type: Number,
      trim: true
    },
    formTiming: {
      type: Number,
      trim: true
    },
    choiceNumber: {
      type: Number,
      trim: true
    },
    formLabel: {
      type: String,
      trim: true
    },
    formButton1: {
      type: String,
      trim: true
    },
    btnNext1: {
      type: String,
      trim: true
    },
    formButton2: {
      type: String,
      trim: true
    },
    btnNext2: {
      type: String,
      trim: true
    },
    formButton3: {
      type: String,
      trim: true
    },
    btnNext3: {
      type: String,
      trim: true
    },
    formButton4: {
      type: String,
      trim: true
    },
    btnNext4: {
      type: String,
      trim: true
    },
    videoUrlsm: {
      type: String,
      trim: true
    },
    videoUrllg: {
      type: String,
      trim: true
    },
    userID: {
      type: Number,
      trim: true
    },
    videoUrl: {
      type: String,
      trim: true
    },
    public_id: {
      type: String,
      trim: true
    }
  
  })
  
  const Model = mongoose.model( "model", schema, "myCollection");

  module.exports = Model;