import { useLoaderData } from 'react-router-dom'
import customFetch from '../utils/customFetch'
import { CustomActionError } from '../utils/type'
import { toast } from 'react-toastify'
import { JobsContainer, SearchContainer } from '../components'
import { createContext, useContext } from 'react'

type Job = {
	_id: string
	createdAt: string
	createdBy: string
	jobLocation: string
	jobStatus: string
	jobType: string
	position: string
	updatedAt: string
}

export const loader = async (): Promise<[Job]> => {
	try {
		const { data } = await customFetch.get('/jobs')
		return { data }
	} catch (error) {
		const customError = error as CustomActionError
		toast.error(customError.response?.data?.msg || 'An error occurred')
		return error
	}
}

type AllJobsContextType = {
	data: Job
}

const defaultContextValue: AllJobsContextType = {
	data: null,
}

const AllJobsContext = createContext(defaultContextValue)

const AllJobs = () => {
	const { data } = useLoaderData()
	console.log(data)

	return (
		<AllJobsContext.Provider value={{ data }}>
			<SearchContainer />
			<JobsContainer />
		</AllJobsContext.Provider>
	)
}

export const useAllJobsContext = () => useContext(AllJobsContext)

export default AllJobs
