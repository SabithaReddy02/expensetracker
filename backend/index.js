const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const expenseRoutes=require('./routes/expenseRoutes')
const app=express()
const port=8080

app.use(express.json())
app.use(cors())

//connect to db
mongoose.connect("mongodb+srv://ExpenseTracker:ExpenseTracker@cluster0.mfycv9a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
//Routes
app.use('/expenses',expenseRoutes)

//Start server

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})
