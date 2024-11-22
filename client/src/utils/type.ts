export type CustomActionError = {
	response?: {
		data?: {
			msg?: string
		}
	}
}

export type JobType = {
	_id: string
	createdAt: string
	createdBy: string
	jobLocation: string
	jobStatus: string
	jobType: string
	position: string
	updatedAt: string
}

export type User = {
	_id: string
	name: string
	email: string
	lastName: string
	location: string
	role: string
}
