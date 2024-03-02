const express=require('express')
const router=express.Router();
const expenseController=require('../controllers/expensiveControllers')

router.get('/',expenseController.getAllExpenses)
router.post('/',expenseController.createExpense)
module.exports=router