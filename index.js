const express = require('express');
const bodyParser = require('body-parser');
const userService = require('./models/user/userService.js');

const app = express();

app.use(bodyParser.json());

app.post('/users', async (req,res)=>{
    try{
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let email = req.body.email;
        if(!firstName || !lastName || !email){
            res.sendStatus(400);
            return;
        }
        await userService.createUser(firstName, lastName, email);
        res.sendStatus(201);
    }
    catch(error){
        console.log(error);
        if(error.code === 'ER_DUP_ENTRY'){
            res.sendStatus(422, 'User already exists');
            return;
        } 
        res.sendStatus(500, error);
    }
});

app.get('/users/:id*', async (req,res)=>{
    try{
        if(!req.params.id){
            res.sendStatus(400);
            return;
        }
        let user = await userService.findById(req.params.id);
        user ? res.send(user) : res.sendStatus(404);
    }
    catch(error){
        console.log(error);
        res.sendStatus(500, error);
    }
});

app.get('/users', async(req,res)=>{
    try{
        paramsArray = [];
        console.log(req.query);
        if(req.query.firstName) paramsArray.push({"firstName" : req.query.firstName});
        if(req.query.lastName) paramsArray.push({"lastName" : req.query.lastName});
        if(req.query.email) paramsArray.push({"email" : req.query.email});
        let result = await userService.searchUsers(paramsArray);
        res.send(result);
    }
    catch(error){
        console.log(error);
        res.sendStatus(500, error);
    }
});

app.delete('/users/:id*', async (req,res)=>{
    try{
        if(!req.params.id){
            res.sendStatus(400);
            return;
        }
        await userService.deleteUserById(req.params.id);
        res.sendStatus(200);
    }
    catch(error){
        console.log(error);
        res.sendStatus(500,error);
    }
});

app.put('/users/:id*', async (req,res)=>{
    try{
        let user = req.body;
        user.id = req.params.id;
        await userService.updateUser(user);
        res.sendStatus(200);
    }
    catch(error){
        console.log(error);
        res.sendStatus(500,error);
    }
});

app.listen(9000);
