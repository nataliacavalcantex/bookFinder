import User from '../models/User'
import File from '../models/File'
import * as Yup from 'yup'
import jwt from 'jsonwebtoken'
import auth from '../../config/auth'
import { username } from '../../config/database'
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
        const user=await User.findOne({
            where:{email:email},
            include:[{
                    model:File,
                    as:"avatar",
                    attributes: ['id','path','url']
            }]
        })
        if(!user){
            return res.status(401).json({error:"This email adress does not exist"})
        }
        if(!(user.checkPassword(password))){
            return res.status(401).json({error:"Password incorret"})
        }
        const{id}=user
        return res.json({
            user
            ,token: jwt.sign({id},auth.secret,{
                expiresIn:auth.expiresIn
            })
        })
    }
}
export default new SessionController()