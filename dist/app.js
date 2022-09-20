'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
console.log('live');
const router = express.Router();
router.get('/api', (req, res) => {
    res.status(201).json({
        message: 'index 123',
    });
});
router.get('/hi', (req, res) => res.json({ message: 'hello there' }));
//router.post('/', (req, res) => res.json({ postBody: req.body }));
app.use(bodyParser.json());
app.use('/.netlify/functions/app', router); // path must route to
// lambda
module.exports = app;
module.exports.handler = serverless(app);
