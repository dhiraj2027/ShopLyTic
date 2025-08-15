import express from 'express'
import { placeOrder, placeOrderStripe, allOrders, userOrders, updateOrderStatus, verifyStripe } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()


// Admin Features
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateOrderStatus)

// Payment Features
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/stripe', authUser, placeOrderStripe)

// Verify Stripe Payment
orderRouter.post('/verifyStripe', authUser, verifyStripe)

// User Feature
orderRouter.post('/userorders', authUser, userOrders)

export default orderRouter