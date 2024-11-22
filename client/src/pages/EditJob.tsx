import {
	redirect,
	useLoaderData,
	useParams,
	Form,
	useNavigation,
} from 'react-router-dom'
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify'
import { CustomActionError, JobType } from '../utils/type'
import { LoaderFunctionArgs } from 'react-router-dom'
import { ActionFunctionArgs } from 'react-router-dom'
import { FormRow, FormSelect } from '../components'
import { JOB_STATUS, JOB_TYPE } from '../utils/type'

type JobData = {
	job: JobType
}

export const loader = async ({
	params,
}: LoaderFunctionArgs): Promise<JobData> => {
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
	const { job } = useLoaderData() as JobData

	const navigation = useNavigation()

	const isSubmitting = navigation.state === 'submitting'

	return (
		<>
			<Form method='post' className=''>
				<h4 className=''>edit job</h4>
				{/* form center */}
				<div className=''>
					<FormRow type='text' name='position' defaultValue={job.position} />
					<FormRow type='text' name='company' defaultValue={job.company} />
					<FormRow
						type='text'
						name='jobLocation'
						labelText='job location'
						defaultValue={job.jobLocation}
					/>
					<FormSelect
						name='jobStatus'
						labelText='job status'
						defaultValue={job.jobStatus}
						list={Object.values(JOB_STATUS)}
					/>
					<FormSelect
						name='jobType'
						labelText='job type'
						defaultValue={job.jobType}
						list={Object.values(JOB_TYPE)}
					/>
					<button type='submit' className='' disabled={isSubmitting}>
						{isSubmitting ? 'submitting..' : 'submit'}
					</button>
				</div>
			</Form>
		</>
	)
}

export default EditJob
