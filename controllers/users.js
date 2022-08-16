import { v4 as uuid } from 'uuid';

let users = []

export const getUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {   
    const user = req.body;
    users.push({...user, id: uuid()});
    res.send (`user with the name${user.firstName} added to the database`)
   
    // console.log(`User [${user.username}] added to the database.`);
};

export const getUser = (req, res) => {
    const {id} = req.params;
    const foundUser = users.find((user) => user.id === id)
    // res.send(req.params.id)
    res.send(foundUser)
};

export const deleteUser = (req, res) => { 
    const {id} = req.params
    
    users = users.filter((user) => user.id !== req.params.id);
    res.send(`user with id ${req.params.id} has been deleted`);
};

export const updateUser =  (req,res) => {
    const {id} = req.params;
    const {firstName, lastName, age} = req.body

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age

    res.send (`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
        // user.firstName
    }

    // const user = users.find((user) => user.id === req.params.id);
    
    // user.username = req.body.username;
    // user.age = req.body.age;

    // console.log(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
