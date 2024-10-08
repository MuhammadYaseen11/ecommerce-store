import mongoose from "mongoose";




export const Connection = async (username, password) => {
    //const URL = `mongodb+srv://${username}:${password}@ecommerce-web.zbkp3ij.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-web`;
   // const URL = `mongodb+srv://${username}:${password}@ecommercewebapp.czzthsn.mongodb.net/?retryWrites=true&w=majority&appName=ecommercewebapp`;
      const URL = `mongodb+srv://${username}:${password}@ecommerce-web.zbkp3ij.mongodb.net/ECOMMERCE?retryWrites=true&w=majority&appName=ecommerce-web`;
        
      try {
       await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
       console.log('Database connected successfully');

    } catch (error){
        console.log(`Error while connecting with the database `, error.message);
    }
}

export default Connection;