import mongoose from 'mongoose'
import { JOB_STATUS, JOB_TYPE } from '../utils/constans'

const JobSchema = new mongoose.Schema(
	{
		company: String,
		position: String,
		jobStatus: {
			type: String,
			enum: Object.values(JOB_STATUS),
			default: JOB_STATUS.PENDING,
		},
		jobTyper: {
			type: String,
			enum: Object.values(JOB_TYPE),
			default: JOB_TYPE.FULL_TIME,
		},
		jobLocation: {
			type: String,
			default: 'my city',
		},
	},
	{
		timestamps: true,
	}
)

export default mongoose.model('Job', JobSchema)
