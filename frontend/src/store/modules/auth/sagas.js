
import { takeLatest, call, put, all } from 'redux-saga/effects';
import {toast} from 'react-toastify'
import api from '../../../services/api';
import history from '../../../services/history';
import { signInSuccess,signFailure } from './actions';

export function* signIn({ payload }) {
    const { email, password } = payload;
    try{

        const response = yield call(api.post, 'login', {
            email,
            password,
        });
        
        const { token, user } = response.data;
        
        
        yield put(signInSuccess(token, user));
        toast.success('Bem vindo')
        history.push('/home');
} catch (err){
        toast.error('Falha na autenticação')
        yield put(signFailure())
}
}
export function* signUp({payload}){
    const {name,email, password}=payload

    try {
        yield call(api.post,'register',{
            name,
            email,
            password
        })
        history.push('/')
    }
    catch(err){
        toast.error('Falha no cadastro')
    }
}
export function setToken({payload}){
    if(!payload){
        return
    }
    const {token}=payload.auth
    if(token){
        api.defaults.headers['Authorization']=`Bearer ${token}`
    }
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);