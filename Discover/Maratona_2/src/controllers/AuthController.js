const Database = require('../db/config')
const authConfig = require('../config/auth')
const jwt = require('jsonwebtoken')

function generateToken( params={} ){
    return jwt.sign(params, authConfig.secret, {
        expiresIn:60000,
    })

}

module.exports = {
    index(req,res) {

        return res.render("login")
    },
 async login(req,res){
        const { name, password } = req.body;
        console.log(name,password)
        const db = await Database();
        
        const userName =  await db.get(`
        SELECT * FROM user 
        WHERE name = "${name}"
                `)
               
        if(!userName)
        return res.status(400).send({error: 'User not found'});

        if(!await db.get(`
        SELECT * FROM user 
        WHERE name = "${name}"
        AND 
        password = ${password}
        `))            
        return res.status(400).send({error:'Invalid Password'});
     

        const authtoken =   generateToken({ id: userName.id })
  
    
        await db.close();
        res.headers = { authorization: authtoken}
        req.session.message = {userName, authtoken
        }
        res.cookie( 'authToken', authtoken, {
            maxAge: 3600000
        });
        
        
       
        
   
        res.redirect("/index")
    // res.redirect("/callback")
        
        
    }

}