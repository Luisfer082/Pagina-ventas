const  mongoose= require('mongoose');
require('dotenv').config()

const db = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
                useNewUrlParse: true,
                useUnifiedTopology: true,
            });
    }   
    catch(error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = db