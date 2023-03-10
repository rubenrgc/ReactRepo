import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'

// @desc Fetch all products
// @route GET /api/products
// @acces Public

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
   
    return  res.json(products)

  })
)

// @desc Fetch sigle product
// @route GET /api/products/:id
// @acces Public

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
     return res.json(product)
    } else {
       res.status(404) 
      throw new Error('Product Not Found')
     
    }

     res.json(product)
   
  })
)

export default router
