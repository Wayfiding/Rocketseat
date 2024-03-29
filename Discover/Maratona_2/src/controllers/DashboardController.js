const Job = require('../models/Job')
const JobUtils = require('../utils/JobUtils')
const Profile = require('../models/Profile')
const User = require('../models/User')
const express = require('express')
const router = express.Router()

const authMiddleware = require('../middlewares/auth')


router.use(authMiddleware)


module.exports = {
  

  async index(req, res) {
       
 
      await authMiddleware(req,res)
      const data = req.session.message
      console.log(data)
    // console.log(data)
      const user = data.userName
    
    
   // const auth = await User.auth(user,password)
    const jobs =  await Job.get(user);
    const profile = await Profile.get(user);
    console.log(jobs)
    let statusCount = {
        progress: 0,
        done: 0,
        total: jobs.length
    }
    // total de horas por dia de cada projeto em progresso
    let jobTotalHours = 0
    const updatedJobs = jobs.map((job) => {
      // ajustes no jobs
      const remaining = JobUtils.remainingDays(job);
      const status = remaining <= 0 ? "done" : "progress";

        // status = done/progress
        // Somando as quantidade de status
        statusCount[status] += 1;

        jobTotalHours = status == 'progress' ? jobTotalHours + Number(job['daily-hours']) : jobTotalHours
        
       
      return {
        ...job,
        remaining,
        status,
        budget: JobUtils.calculateBudget(job, profile["value-hour"]),
      };
    });



    // qtd de horas que quero trabalhar MENOS quantidade de horas/dia de cada job em progress
    const freeHours = profile["hours-per-day"] - jobTotalHours;

    return res.render("index", { jobs: updatedJobs, profile: profile , statusCount: statusCount, freeHours: freeHours });
  },
};
