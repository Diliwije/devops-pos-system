const express=require('express');
const router = express.Router();

const ProductController = require('../controller/ProductController');
const middleware = require('../middleware/Middleware');

router.post('/create',middleware, ProductController.createProduct);
router.put('/update/:id', ProductController.updateProduct);
router.delete('/delete/:id', ProductController.deleteProduct);
router.get('/find-by-id/:id', ProductController.findProductById);
router.get('/load-all', ProductController.loadAllProducts);

module.exports= router;