const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors=require('cors')
app.use(cors()); 


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//routes
const findDocRoute = require('./routes/findDoctor');
app.use('/findDoctor', findDocRoute);




const mongoose = require("mongoose");

(async () => {
  try {
    await mongoose.connect('mongodb+srv://snigdha22bce8076:snigy@cluster0.bdo2p0l.mongodb.net/');
    
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
})();
const Item = require("./models/item"); // Create the Item model
// app.get("/api/items", async (req, res) => {
//   try {
//     const items = await Item.find();
//     res.json(items);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server Error");
//   }
// });

 

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));