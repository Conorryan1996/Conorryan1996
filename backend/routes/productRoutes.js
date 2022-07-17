import express from 'express'
const router = express.Router()
import { getProducts, getProductbyID } from '../controllers/productController.js'


//description: fetch all products
//route: GET /api/products
//access: Public 
router.route('/').get(getProducts)
router.route('/:id').get(getProductbyID)
export default router