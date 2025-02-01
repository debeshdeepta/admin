import userModels from "../models/userModels.js";
import  JWT  from "jsonwebtoken";

export const registerController = async(req, res) => {
    try{
        const {name, email, password, phone} = req.body;

        //validation
        if(!name){
            return res.send({message:'Name is required'});
        }
        if(!email){
            return res.send({message:'Email is required'});
        }
        if(!password){
            return res.send({message:'Password is required'});
        }
        if(!phone){
            return res.send({message:'Phone Number is required'});
        }

        const existinguser = await userModels.findOne({email});
        //Check Existing user
        if (existinguser) {
            return res.status(200).send({
                success: false,
                message: 'Already Register Please login'
            })
        }

        //save
        const user = await new userModels({
            name, 
            email, 
            password, 
            phone
        }).save(); //To save

        res.status(201).send({
            success:true,
            message: 'User Register Successfully',
            user
        });

    } catch (error){
        console.log(error)
        res.status(500).send({
            success:false,
            message: "Error in Registration",
            error: error.message,
        });
    }
};

//POST LOGIN
export const loginController = async(req, res) => {
    try{
        const {email, password} = req.body;

        //Validation
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid Email or Password",
            })
        };

        //Check user
        const user = await userModels.findOne({email}); 
        if(!user){
            return res.status(404).send({
                success: false,
                message: "Email is not registered",
            })
        }
        // const match = await comparePassword(password, user.password);
        if (password !== user.password) {
            return res.status(200).send({
                success: false,
                message:"Invalid password",
            })
        }

        //Token
        const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        res.status(200).send({
            success:true,
            message: "Login Successfully",
            user:{
                _id:user._id,
                name:user.name,
                email:user.email,
                phone:user.phone,
                address: user.address,
                role:user.role
            },
            token,
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Login",
            error
        })
    }
};


//Forgot Password

export const forgotPasswordContoller = async (req, res) => {
    try {
        const {email, answer, newPassword} = req.body;
        if (!email){
            res.status(400).send({message: "Email is required"})
        }
        if (!answer){
            res.status(400).send({message: "Answer is required"})
        }
        if (!newPassword){
            res.status(400).send({message: "New Password is required"})
        }
        //Check
        const user = await userModels.findOne({ email, answer });
        //validation
        if (!user) {
            res.status(400).send({
                success: false,
                message: "Wrong Email or Answer"
            })
        }
        // const hashed = await hashPassword(newPassword)
        await userModels.findByIdAndUpdate(user._id, {password: password});
        res.status(200).send({
            success: true,
            message: "Password Reset Successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Something went wrong",
            error: error.message
        })
    }
};

//Test controller
export const testcontroller = (req, res) =>{
    console.log("Protected Route");
    res.status(200).send({
        success:true,
        message: "Logged In"
    })
}

