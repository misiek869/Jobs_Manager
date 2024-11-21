import customFetch from '../utils/customFetch'

export const loader = async () => {
	try {
		const data = await customFetch.get('/jobs')
		console.log(data)
		return data
	} catch (error) {}
}

const AllJobs = () => {
	return <div>AllJobs</div>
}

export default AllJobs
