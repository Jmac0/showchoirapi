'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Well hello',
    });
});
router.get('/another', (req, res) => res.json({ message: 'hello bertie' }));
//router.post('/', (req, res) => res.json({ postBody: req.body }));
app.use(bodyParser.json());
app.use('/.netlify/functions/app', router); // path must route to
// lambda
module.exports = app;
module.exports.handler = serverless(app);
