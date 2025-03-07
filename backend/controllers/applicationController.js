
import { Application } from "../models/application.model.js"
import { Job } from "../models/job.model.js"
export const applyJob = async (req, res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id;

        if (!jobId) {
            return res.status(400).json({
                message: "Job id is required",
                success: false
            });
        };
        //check if the use has already applied for the job
        const existingApplication = await Application.findOne({ job: jobId, applicant: userId });
        if (existingApplication) {
            return res.status(400).json({
                message: "you have already applied for this jog",
                success: false
            });
        }
        //check if the jobs exists   
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            })
        }

        //create a new application
        const  newApplication =  await Application.create({
            job:jobId,
            application:userId
        });

        job.applications.push(newApplication._id);
        await job.save();
        return res.status(201).json({
            message:"job appliyed successfully",
            success:true
        })
    } catch (error) {
        console.log(error)
    }
};

export const getAppliedJobs = async(req,res)=>{
    try {
        const userId = req.id;
        const  application = await Application.find({applicant:userId})
    } catch (error) {
        console.log(error)
    }
}