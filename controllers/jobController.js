import JobModel from '../models/JobModel.js'
import { StatusCodes } from 'http-status-codes'
import { NotFoundError } from '../errors/customErrors.js'
import { nanoid } from 'nanoid'

let jobs = [
	{ id: nanoid(), company: 'Apple', position: 'front-end developer' },
	{ id: nanoid(), company: 'Google', position: 'back-end developer' },
]

export const getAllJobs = async (req, res) => {
	const jobs = await JobModel.find({})
	res.status(StatusCodes.OK).json({ jobs })
}

export const createJob = async (req, res) => {
	const { company, position } = req.body

	const job = await JobModel.create({
		company,
		position,
	})

	res.status(StatusCodes.CREATED).json({ job })
}

export const getSingleJob = async (req, res) => {
	const { id } = req.params

	const job = await JobModel.findById(id)

	if (!job) throw new NotFoundError(`there is no job with id ${id}`)

	res.status(StatusCodes.OK).json({ job })
}

export const editJob = async (req, res) => {
	const { id } = req.params

	const updatedJob = await JobModel.findByIdAndUpdate(id, req.body, {
		new: true,
	})

	if (!updatedJob) {
		return res.status(404).json({ msg: `there is no job with id ${id}` })
	}

	res.status(StatusCodes.OK).json({ msg: 'job modified', job: updatedJob })
}

export const deleteJob = async (req, res) => {
	const { id } = req.params

	const removedJob = await JobModel.findByIdAndDelete(id)

	if (!removedJob) {
		return res.status(404).json({ msg: `there is no job with id ${id}` })
	}

	res.status(StatusCodes.OK).json({ msg: 'job deleted', job: removedJob })
}
