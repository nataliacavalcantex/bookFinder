import User from '../models/User'
import * as Yup from 'yup'
import jwt from 'jsonwebtoken'
import auth from '../../config/auth'
class SessionController{
    async store(req,res){
        const schema= Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().min(8).required()
        }) 
        if(!(await schema.isValid(req.body))){
            return res.status(401).json({error:"User not found"})
        }
        const {email, password}= req.body
        const userExist=await User.findOne({where:{
            email:email
        }})
        if(!userExist){
            return res.status(401).json({error:"This email adress does not exist"})
        }
        if(!(userExist.checkPassword(password))){
            return res.status(401).json({error:"Password incorret"})
        }
        const{id,name}=userExist
        return res.json({
            user:{
                id,
                name,
                email
            },token: jwt.sign({id},auth.secret,{
                expiresIn:auth.expiresIn
            })
        })
    }
}
export default new SessionController()