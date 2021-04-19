const express = require('express')
const User = require('../models/User')

module.exports = {

    async index(req,res) {

        return res.render("register")
    },


    async register(req,res){
        const { name, password } = req.body;
        console.log(name, password)
        const db = await User.register({name,password})

        return res.redirect("/")  
    }
}