const Job = require('../models/Job')
const JobUtils = require('../utils/JobUtils')
const Profile = require('../models/Profile')

module.exports = {
    create(req, res) {
        return res.render("job")
    },
    async save(req, res) {
        const data = req.session.message
        const user = data.userName["iduser"]
        console.log(user)
        await Job.create({
            userId: user,
            name: req.body.name,
            "daily-hours": req.body["daily-hours"],
            "total-hours": req.body["total-hours"],
            created_at: Date.now()
        })
        return res.redirect('/index')
    },
    async show(req, res) {
        const data = req.session.message
   
      const user= data.userName
        const jobId = req.params.id
        const jobs = await Job.get(user)
        const job = jobs.find(job => Number(job.id) === Number(jobId))

        if (!job) {
            return res.send('Job not found!')
        }
        const profile = await Profile.get(user)
        job.budget = JobUtils.calculateBudget(job, profile["value-hour"])

        return res.render("job-edit", { job })

    },
    async update(req, res) {
        const data = req.session.message
   
      const iduser = data.userName

        const jobId = req.params.id
        

       

      
        const updateJob = {
            
            name: req.body.name,
            "total-hours": req.body["total-hours"],
            "daily-hours": req.body["daily-hours"],
        }

      
        await Job.update(updateJob, jobId,iduser)
        res.redirect('/job/' + jobId)

    },
   async delete(req, res) {
        const jobId = req.params.id
        console.log(jobId)
        await  Job.delete(jobId)
        return res.redirect('/index')
    }
}