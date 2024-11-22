import { useLoaderData } from 'react-router-dom'
import customFetch from '../utils/customFetch'
import { CustomActionError } from '../utils/type'
import { toast } from 'react-toastify'
import { JobsContainer, SearchContainer } from '../components'
import { createContext, useContext } from 'react'
import { JobType } from '../utils/type'

export const loader = async (): Promise<[JobType]> => {
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
	data: JobType
}

const defaultContextValue: AllJobsContextType = {
	data: null,
}

const AllJobsContext = createContext(defaultContextValue)

const AllJobs = () => {
	const { data } = useLoaderData()

	return (
		<AllJobsContext.Provider value={{ data }}>
			<SearchContainer />
			<JobsContainer />
		</AllJobsContext.Provider>
	)
}

export const useAllJobsContext = () => useContext(AllJobsContext)

export default AllJobs
