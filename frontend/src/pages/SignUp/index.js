import React from 'react'
import {NavLink} from 'react-router-dom'
import {Form,Input} from '@rocketseat/unform'
import * as Yup from 'yup'
import {useDispatch} from 'react-redux'
import { signUpRequest} from '../../store/modules/auth/actions'
const schema=Yup.object().shape({
    name:Yup.string().required('O nome é obrigatório'),
    email:Yup.string().email('Insira um email válido').required('O email é obrigatório'),
    password:Yup.string().required('A senha é obrigatória').min(6,'A senha deve ter no minimo 6 digitos')
})
export default function SignUp(){
    const dispatch=useDispatch()
    function handleSubmit({name,email,password}){
       dispatch(signUpRequest(name,email,password))
    }
    return(
    <>
        <Form schema={schema} onSubmit={handleSubmit}>
            <Input name="name" type="name" placeholder="Name"></Input>
            <Input name="email" type="email" placeholder="Email"></Input>
            <Input name="password"type="password" placeholder="Senha"></Input>

            <button type="submit">Criar uma conta</button>
            <NavLink to="/">Entre na aplicação</NavLink>
        </Form>
    </>
    )
}
