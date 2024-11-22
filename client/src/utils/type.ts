export type CustomActionError = {
	response?: {
		data?: {
			msg?: string
		}
	}
}

export type Job = {
	_id: string
	createdAt: string
	createdBy: string
	jobLocation: string
	jobStatus: string
	jobType: string
	position: string
	updatedAt: string
}
