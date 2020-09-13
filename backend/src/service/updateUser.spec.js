import * as supertest from 'supertest';

var server = supertest.agent("http://localhost:3336");

describe('AuthenticateUser',()=>{
    it('User should be able to update informations',async (done) =>{
        const user={
            name:"Jane Doe",
            email:"janedoe1@gmail.com",
            password:"janedoe123"
        }
        await server.post('/register').send(user)
        const credentials={
            email:user.email,
            password:user.password
        }
        const res=await server.post('/login').send(credentials)
        let token = res.body.token
        const userInfo={
                email:credentials.email,
                oldPassword:credentials.password,
                password:'janedoe321',
                confirmPassword:'janedoe321'
        }
        const response = await server.put('/users').set('Authorization', `Bearer ${token}`).send(userInfo)
        expect(response.statusCode).toBe(200)
        done()
 
    })
})