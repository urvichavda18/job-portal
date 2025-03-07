import { Job } from "../models/job.model.js";

export const postjob = async (req, res) => {
    try {
        const { title, description, requirements, salary, location, jobType, experience, position, companyId } = req.body;
        const userId = red.id;
        if (title || description || requirements || salary || location || jobType || experience || position || companyId) {
            return res.status(400).json({
                message: "something is missing",
                success: false
            })
        }
        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","),
            salary: Number(salary),
            location,
            jobType,
            experienceLevel: experience,
            position,
            company,
            companyId,
            created_by: userId
        });
        return res.status(201).json({
            message: "New job created succesfuly.",
            job,
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}

//get job

export const getALLJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } }
            ]
        };
        const jobs = await Job.find(query)
    } catch (error) {
        console.log(error)
    }
}