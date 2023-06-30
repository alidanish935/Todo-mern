import mongoose from "mongoose";

const Connection = (USERNAME,PASSWORD) =>{
    ////${USERNAME}:${PASSWORD}
    // alidanish935:danish
    const url ='mongodb://localhost:27017/playground'
    const URL =`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.qphkqzh.mongodb.net/?retryWrites=true&w=majority`
  // try{
        mongoose.connect(URL, {useNewUrlParser:true})
           // console.log('Database connected Successfully');

        mongoose.connection.on('connected', () => {
            console.log('Database connected Successfully');
        })
        mongoose.connection.on('disconnected', () => {
            console.log('Database disconnected')
        })
        mongoose.connection.on('error', (error)=>{
            console.log('Error while connecting with the database ', error.message);     
        })

        
//    }catch(error){
//        console.log('error while connecting with db -- ',error.messege)
//    }
}

export default Connection;