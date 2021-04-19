const Profile = require('../models/Profile')

module.exports = {
    async index(req, res) {
        const data = req.session.message
        const user = data.userName
        
    
        const profile = await Profile.get(user)
        // console.log(profile.name["name"])
        return res.render("profile", { profile: profile})
    },
    async update(req, res) {
        const userData = req.session.message
        const user = userData.userName
        // req.body para pegar os dados
        const data = req.body
        // definir quantas semanas tem num ano: 52
        const weeksPerYear = 52
        // remover as semanas de férias do ano, para pegar quantas esmans tem 1 mês. 
        const weeksPerMonth = (weeksPerYear - data["vacation-per-year"]) / 12
        // quantas hroas por semana estou Trabalhando
        const weeksTotaHours = data["hours-per-day"] * data["days-per-week"]
        // horas trabalhadas no mêses
        const monthlyTotalHours = weeksTotaHours * weeksPerMonth
        // qual será o valor da minha hora ?
        const valueHour = data["monthly-budget"] / monthlyTotalHours

        const profile = await Profile.get(user)
        

        await Profile.update({
             
            ...await profile,
            ...req.body,
            "value-hour": valueHour
        })
        
        return res.redirect('/profile')
    }
}