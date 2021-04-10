const express = require('express')
const User = require('../models/User')

module.exports = {
    async register(req,res){
        const { name, password } = req.body;
        console.log(name, password)
       const db = await User.register({name,password})

        return res.status(200).send({ok:true , user: db.username, password: db.userpassword})  
    }
}