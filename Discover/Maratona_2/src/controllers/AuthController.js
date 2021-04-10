const User = require('../models/User')
const Database = require('../db/config')

module.exports = {
    index(req,res) {

        return res.render("login")
    },
 async login(req,res){
        const { name, password } = req.body;
        console.log(name,password)
        const db = await Database();
        
        userName=  await db.get(`
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

        
        await db.close();
        const userdata =  await User.auth(name,password)
        
        res.redirect('/index/'+ userdata.username)
    }

}