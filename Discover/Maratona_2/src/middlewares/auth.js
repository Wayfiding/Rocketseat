const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')



module.exports =  (req,res,next) => {
    
    const teste = req.cookies['authToken']
    console.log(teste)
    const authHeader = req.cookies["authToken"];
    

    if(!authHeader)
    return res.status(401).send({error: 'No token provided' });

    // Remember how to use Bearer doauda8duasdiaspdasd0d01392193293912daddfsh

    const parts = authHeader.split(' ');
   

    if(!parts.length === 2)
    return res.status(401).send({error: 'Token error '});

  
    const [  token ] = parts;
    jwt.verify(token,authConfig.secret, (err, decoded) => {
        console.log(token)
        if(err) return res.status(401).send({ error: 'Token Invalid'})
        
        req.userId = decoded.id;
        return next


    });}
