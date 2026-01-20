const express=require('express');
const router = express.Router();

const OrderController = require('../controller/OrderController');
const middleware = require('../middleware/Middleware');

router.post('/create',middleware, OrderController.createOrder);
router.get('/find-all', OrderController.findAllOrders);

module.exports= router;