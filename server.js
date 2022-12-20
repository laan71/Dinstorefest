const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs =require('ejs');

app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://DinStoreFest:3NzTWdILKT3E6bHk@cluster0.2nzwv.mongodb.net/?retryWrites=true&w=majority');

app.get('/', (req, res) => {
    let name = 'Marina';

    res.render('index', {
            userName : name
    });
    })

app.listen(3008, function() {
    console.log('server is running');
    })