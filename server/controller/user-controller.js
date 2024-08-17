import User from "../model/user-schema.js";

export const userSignUp = async (request, response) => {
    try {

        const exist = await User.findOne({username: request.body.username});
        if (exist) {
            return response.status(400).json({message: "Username already exists"});
        }
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();

        response.status(200).json( {message: user} ); //no need for return statement.
    } catch (error) {
        response.status(500).json( {message: error.message} );
       
    }
}