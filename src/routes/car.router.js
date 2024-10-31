const {getAll, create} = require('../controllers/car.controllers');
const express = require('express');

const carRouter = express.Router();

carRouter.route('/')
    .get(getAll)
    .post(create)

module.exports = carRouter;