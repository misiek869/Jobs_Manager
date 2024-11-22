import {
	redirect,
	useLoaderData,
	// useParams,
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
import { btnStyle } from './Register'

type JobData = {
	job: JobType
}

export const loader = async ({
	params,
}: LoaderFunctionArgs): Promise<JobData> => {
	try {
		const { data } = await customFetch.get(`/jobs/${params.id}`)
		return data
	} catch (error) {
		const customError = error as CustomActionError
		toast.error(customError.response?.data?.msg || 'An error occurred')
		return redirect('/dashboard/all-jobs')
	}
}

export const action = async ({ request, params }: ActionFunctionArgs) => {
	const formData = await request.formData()
	const data = Object.fromEntries(formData)

	try {
		await customFetch.patch(`/jobs/${params.id}`, data)
		toast.success('Job Updated')
		return redirect('/dashboard/all-jobs')
	} catch (error) {
		const customError = error as CustomActionError
		toast.error(customError.response?.data?.msg || 'An error occurred')
		return error
	}
}

const EditJob = () => {
	// const params = useParams()
	const { job } = useLoaderData() as JobData

	const navigation = useNavigation()

	const isSubmitting = navigation.state === 'submitting'

	return (
		<section className='rounded-xl bg-orange-700 text-slate-50 w-full py-12 px-16'>
			<Form method='post' className='max-w-full w-full'>
				<h4 className='mb-4 pb-4 border-b-2'>edit job</h4>

				<div className='grid gap-y-4 lg:grid-cols-3 items-center gap-x-4'>
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
					<button
						type='submit'
						className={`${btnStyle} bg-orange-900 grid place-items-center self-end`}
						disabled={isSubmitting}>
						{isSubmitting ? 'submitting..' : 'submit'}
					</button>
				</div>
			</Form>
		</section>
	)
}

export default EditJob
