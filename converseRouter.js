const express = require("express");
const Model = require('./questionModel')
const app = express();



app.get("/questions/:userID", async (request, response) => {
    const questions = await Model.find({ userID: request.params.userID});
  
    try {
      response.send(questions);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.get("/questions", async (request, response) => {
    const questions = await Model.find({});
  
    try {
      response.send(questions);
    } catch (error) {
      response.status(500).send(error);
    }
  });


app.post("/question/", async (request, response) => {
    const newQuestion = new Model(request.body)
  
    try {
      newQuestion.save()
    } catch (error) {
      response.status(500).send(error);
    }
  }); 
    
  

  app.patch("/question/:id", async (request, response) => {
    try {
      await Model.findByIdAndUpdate(request.params.id, request.body);
      await Model.save();
      response.send(question);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.delete("/question/:id", async (request, response) => {
    try {
      const food = await Model.findByIdAndDelete(request.params.id);
  
      if (!food) response.status(404).send("No item found");
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
  });

  module.exports = app;