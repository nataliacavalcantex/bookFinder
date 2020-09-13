import * as supertest from 'supertest';

var server = supertest.agent("http://localhost:3336");
describe('CreateUser',()=>{
    it('should be able to create a new user',async (done) =>{
        jest.setTimeout(8000);
        const user={
                name:"Jonh Doe",
                email:"jonhdoe1@gmail.com",
                password:"jonhdoe123"
        }
        const response = await server.post('/register').send(user);
        expect(response.statusCode).toBe(200)
        done()
 
    })
})