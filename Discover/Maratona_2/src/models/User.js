const Database = require('../db/config')

module.exports = {
    async auth(name, password) {
        const db = await Database()

        userData = await db.get(`
        SELECT * FROM user 
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
        await db.close()
        return {
            username: userData.name,
            userpassword: userData.password
        }
    }

}