const express = require('express');
const { findAll } = require('../services/BookService');


//create router object
const BookController = express.Router();


//todos : controller
BookController.get('/list', async (req, res) => {

    try {
        const books = await findAll();
        res.json(books);
    }
    catch (err) {
        res.json(err);
    }

})

//exports controller
module.exports = BookController;