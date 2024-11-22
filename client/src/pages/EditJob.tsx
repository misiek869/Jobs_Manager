import { redirect, useLoaderData, useParams } from 'react-router-dom'
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify'
import { CustomActionError, JobType } from '../utils/type'
import { LoaderFunctionArgs } from 'react-router-dom'
import { ActionFunctionArgs } from 'react-router-dom'

type JobData = {
	job: JobType // Typ dla obiektu job
}

export const loader = async ({
	params,
}: LoaderFunctionArgs): Promise<JobData> => {
	console.log(params)
	try {
		const { data } = await customFetch.get(`/jobs/${params.id}`)
		console.log(data)
		return data
	} catch (error) {
		const customError = error as CustomActionError
		toast.error(customError.response?.data?.msg || 'An error occurred')
		return redirect('/dashboard/all-jobs')
	}
}

export const action = async => {
	return null
}

const EditJob = () => {
	// const params = useParams()
	const { job } = useLoaderData()
	// console.log(job)

	return <div>EditJob</div>
}

export default EditJob
