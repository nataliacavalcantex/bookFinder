import React from 'react'
import {Switch} from 'react-router-dom'
import Route from './Route'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import Profile from '../pages/Profile'
import Dashboard from '../pages/Dashboard'
export default function Routes(){
    return (
    <Switch>
        <Route path='/' exact component={SignIn}></Route>
        <Route path='/register' component={SignUp}></Route>
        <Route path='/profile' component={Profile} isPrivate></Route>
        <Route path='/home' component={Dashboard} isPrivate></Route>
        <Route path='/erros' component={()=><h1>404</h1>}></Route>
    </Switch>
    )
}