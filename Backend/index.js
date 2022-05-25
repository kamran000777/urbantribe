require('dotenv').config();
const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

connectDB();

const app = express();

app.use(express.json());

app.use("/api/products",productRoutes)

//---------deployment------------
if(process.env.NODE_ENV==="production"){
      app.use(express.static(path.join(__dirname,'../tribe/build')));

      app.get('*',(req,res)=> res.sendFile(path.resolve(__dirname,'../','tribe','build',"index.html")
      )
      );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log("server running on port "+PORT));