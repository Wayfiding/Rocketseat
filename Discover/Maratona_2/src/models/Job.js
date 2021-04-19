const Database = require('../db/config')


module.exports = {
    async get(userJobs) {
        
        const db = await Database()

        const jobs = await db.all(`SELECT * FROM jobs WHERE id_user = ${userJobs["iduser"]} `)


        await db.close()

        return jobs.map(job => ({

            id: job.idJob,
            name: job.name,
            "daily-hours": job.daily_hours,
            "total-hours": job.total_hours,
            created_at: job.created_at

        }))
    },
    async update(updateJob, jobId) {
        const db = await Database()
        
        await db.run(`UPDATE jobs SET
        name = "${updateJob.name}",
        daily_hours = ${(updateJob["daily-hours"])},
        total_hours = ${updateJob["total-hours"]}
        WHERE  idJob = ${jobId}`
        )
        await db.close()
    },
    async delete(id) {
        console.log(id)
        const db = await Database()
        await db.run(`DELETE FROM jobs WHERE idJob = ${Number(id)}`)

        await db.close()
    },
    async create(newJob) {
        console.log(newJob)
        const db = await Database()
        await db.run(`INSERT INTO jobs (
            name,
            daily_hours,
            total_hours,
            created_at,
            id_user
            ) VALUES (
        "${newJob.name}",
         ${newJob["daily-hours"]},
         ${newJob["total-hours"]},
         ${newJob.created_at},
         ${newJob.userId}
         )`)
        await db.close()
    }
}