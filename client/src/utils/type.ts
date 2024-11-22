export type CustomActionError = {
	response?: {
		data?: {
			msg?: string
		}
	}
}

export type JobType = {
	_id: string
	company: string
	createdAt: string
	createdBy: string
	jobLocation: string
	jobStatus: 'pending' | 'approved' | 'rejected'
	jobType: 'full-time' | 'part-time' | 'internship'
	position: string
	updatedAt: string
	__v: number
}

export type UserType = {
	_id: string
	name: string
	email: string
	lastName: string
	location: string
	role: string
}
