const Expense=require('../models/Expense')

//Controllers

exports.getAllExpenses=async(req,res)=>{
    try{
        const expense=await Expense.find();//get all expense
        console.log(expense)
       return res.json(expense)
    }catch(err){
        console.log("Error in fetching the expenses",err)
        res.status(500).json({message:'Internal server error'})
    }
}
//create
exports.createExpense=async(req,res)=>{
    const{description,amount}=req.body;
    try{
        if(!description || !amount){
            return res.send(400).json({message:'Description and amount are required'})
        }
        const newExpense=new Expense({ description,amount  })
        await newExpense.save()
        res.json(newExpense)
    }catch(err){
        console.log("Error in saving expense:",err)
        res.status(500).json({message:'Internal Server error'})
    }
}