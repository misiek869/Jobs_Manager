import JobModel from '../models/JobModel.js'

import { nanoid } from 'nanoid'

let jobs = [
	{ id: nanoid(), company: 'Apple', position: 'front-end developer' },
	{ id: nanoid(), company: 'Google', position: 'back-end developer' },
]

export const getAllJobs = async (req, res) => {
	const jobs = await JobModel.find({})
	res.status(200).json({ jobs })
}

export const createJob = async (req, res) => {
	const { company, position } = req.body

	const job = await JobModel.create({
		company,
		position,
	})

	res.status(201).json({ job })
}

export const getSingleJob = async (req, res) => {
	const { id } = req.params

	const job = await JobModel.findById(id)

	if (!job) {
		return res.status(404).json({ msg: `there is no job with id ${id}` })
	}

	res.status(200).json({ job })
}

export const editJob = async (req, res) => {
	const { company, position } = req.body

	if (!company || !position) {
		return res.status(404).json({ msg: 'please provide company and position' })
	}

	const { id } = req.params

	const job = jobs.find(job => job.id === id)

	if (!job) {
		return res.status(404).json({ msg: `there is no job with id ${id}` })
	}

	job.company = company
	job.position = position

	res.status(200).json({ msg: 'job modified', job })
}

export const deleteJob = async (req, res) => {
	const { id } = req.params

	const job = jobs.find(job => job.id === id)

	if (!job) {
		return res.status(404).json({ msg: `there is no job with id ${id}` })
	}

	const newJobs = jobs.filter(job => job.id !== id)
	jobs = newJobs

	res.status(200).json({ msg: 'job deleted' })
}
