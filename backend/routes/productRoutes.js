import express from 'express'
const router = express.Router()
import { getProducts, getProductbyID, deleteProduct, updateProduct, createProduct, createProductReview
,getTopProducts } from '../controllers/productController.js'
import {protect, admin} from '../middleware/authMiddleware.js'


//description: fetch all products
//route: GET /api/products
//access: Public 
router.route('/').get(getProducts).post(protect,admin,createProduct)
router.route('/:id/reviews').post(protect,createProductReview)
router.get('/top', getTopProducts)
router.route('/:id').get(getProductbyID).delete(protect,admin,deleteProduct).put(protect,admin,updateProduct)
export default router