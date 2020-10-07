import React from 'react'
import Container from './styles'
import {Form,Input} from '@rocketseat/unform'
import {useSelector} from 'react-redux'
export default function Profile(){
    const profile=useSelector(state=>state.user.profile)
    function handleSubmit(data){

    }
    return(
    <Container>
        <Form initialData={profile} onSubmit={handleSubmit}>
            <Input name="name"  placeholder="Nome completo"/>
            <Input name="email"  type="email" placeholder="Email"/>
            <hr></hr>
            <Input name="oldPassword" type="password" placeholder="Sua senha atual"/>
            <Input name="password" type="password" placeholder="Sua nova senha "/>
            <Input name="confirmPassword" type="password" placeholder="Confirme sua nova senha"/>
            <button type="submit">Atualizar perfil</button>
        </Form>
            <button type="button">Sair do BookFinder</button>
    </Container>
    )
}
