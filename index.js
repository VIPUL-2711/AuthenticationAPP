const express=require('express')
const app=express();

require('dotenv').config()
const PORT=process.env.PORT || 4000;

app.use(express.json());

require("./config/database").connect();

//mount 
const user=require('./routes/routes');
app.use("/api/v1",user);

//activate server
app.listen(PORT,  ()=>{
  console.log(`server is activated at ${PORT}`);
})