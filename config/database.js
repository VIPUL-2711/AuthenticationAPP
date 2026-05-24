const mongoose=require('mongoose')

require('dotenv').config();
exports.connect=()=>{
  mongoose.connect(process.env.DATABASE_URL)

  .then(()=>{
    console.log("Db connection succesfuult");
  })
  .catch((err)=>{
    console.log("db connection problem");
    console.error(err);
    process.exit(1);
  });
}