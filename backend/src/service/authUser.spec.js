import * as supertest from 'supertest';

var server = supertest.agent("http://localhost:3336");

describe('AuthenticateUser',()=>{
    it('User should be able to login',async (done) =>{
        const user={
            name:"Jane Doe",
            email:"janedoe@gmail.com",
            password:"janedoe123"
        }
        const res = await server.post('/register').send(user)
        const credentials={
                email:user.email,
                password:user.password
        }
        const response = await server.post('/login').send(credentials)
        expect(response.statusCode).toBe(200)
        done()
 
    })
})