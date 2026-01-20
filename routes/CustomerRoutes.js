const express=require('express')
const router=express.Router()

const customerController=require('../controller/CustomerController')
const middleware=require('../middleware/Middleware')

router.post('/create',middleware,customerController.createCustomer)
router.put('/update/:id',customerController.updateCustomer)
router.delete('/delete/:id',customerController.deleteCustomer)
router.get('/find-by-id/:id',customerController.findCustomerById)
router.get('/loadall',customerController.loadAllCustomers)



module.exports = router