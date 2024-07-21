import { products } from "./constants/data.js"

import Product from "./model/ProductSchema.js";


//Function to delete a product by ID
// const deleteProductById = async (id) => {
//     try {
//         await Product.deleteOne({ id: id });
//         console.log(`Product with ID ${id} deleted successfully`);
//     } catch (error) {
//         console.error('Error while deleting product:', error.message);
//     }
// };

const DefaultData = async () => {
    try{
        await Product.insertMany(products);

        console.log('Data imported successfully');
    } catch(error) {
        console.log('Error while inserting default data ', error.message);
    }

}

// // // Call the function to delete the product
// deleteProductById('product8').then(() => {
//     // After deletion, insert the default data
//     DefaultData();
// });

export default DefaultData;