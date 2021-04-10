const jwt = require('jsonwebtoken')



module.exports = (req,res,next) => {
    const authHeader = req.headers.authorization
    if(!authHeader)
    return res.status(401).send({error: 'No token provided' });


    // Rember how to use Bearer doauda8duasdiaspdasd0d01392193293912daddfsh

    const parts = authHeader.split(' ');
    if (!parts.lenght === 2)
    return res.status(401).send({error: 'Token error '})
    next()
}