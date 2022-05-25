const express = require('express');
const router = express.Router();

const {getAllProducts,getProductById} = require('../controller/productControllers');
//get all products from db
//route get /api/products
//accrss Public
router.get('/',getAllProducts);

//get single products from db
//route get /api/products/:id
//accrss Public
router.get('/:id',getProductById);

module.exports = router;