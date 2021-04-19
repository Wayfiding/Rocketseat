const User = require('../../../../serie-node/src/app/models/user')
const Database = require('../db/config')

module.exports = {
    async auth(name, password) {
        const db = await Database()

        userData = await db.get(`
        SELECT * FROM user WHERE
        name = "${name}"
                `)
        await db.close()
        console.log(userData)

        return {
            username: userData.name,
            userpassword: userData.password
        }



    },
    async register(newUser) {
        const db = await Database()
        console.log(newUser)
        userData = await db.run(`
        INSERT INTO user (
            name,
            password
        ) VALUES (
            "${newUser.name}",
            ${newUser.password}
        )`)
        getId= await db.get(`SELECT * FROM user WHERE
        name = "${newUser.name}"
                `)
        console.log(getId.iduser)
        userProfile = await db.run(`
        INSERT INTO profile (
            name,
            avatar,
            monthly_budget ,
            days_per_week ,
            hours_per_day ,
            vacation_per_year ,
            value_hour ,
            id_user 
        ) VALUES (
            "${newUser.name}",
            'none',
            0,
            0,
            0,
            0,
            0,
            NULL
            

        )`)
        userProfileFKid = await db.run(`
        UPDATE profile SET
            id_user = ${getId.iduser}
         WHERE name = "${newUser.name}"`)
        await db.close()
        return {
            username: userData.name,
            userpassword: userData.password
        }
    }

}