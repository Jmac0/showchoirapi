'use strict';
import { Request, Response } from 'express';

const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();
router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
                         message: 'Well hello',
                       });
});

router.get(
  '/another',
  (req: Request, res: Response) => res.json({ message: 'hello' }),
);
//router.post('/', (req, res) => res.json({ postBody: req.body }));

app.use(bodyParser.json());
app.use('/.netlify/functions/app', router);  // path must route to
// lambda

module.exports = app;
module.exports.handler = serverless(app);
