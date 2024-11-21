import {
	Form,
	redirect,
	useNavigation,
	useOutletContext,
} from 'react-router-dom'
import { FormRow, FormSelect } from '../components'
import { btnStyle } from './Register'
import { ActionFunctionArgs } from 'react-router-dom'
import { CustomActionError } from './Login'
import { toast } from 'react-toastify'
import customFetch from '../utils/customFetch'

const JOB_STATUS = {
	PENDING: 'pending',
	INTERVIEW: 'interview',
	DECLINED: 'declined',
}

const JOB_TYPE = {
	FULL_TIME: 'full-time',
	PART_TIME: 'part-time',
	INTERNSHIP: 'internship',
}

export const action = async ({ request }: ActionFunctionArgs) => {
	const formData = await request.formData()
	const data = Object.fromEntries(formData)

	try {
		await customFetch.post('/jobs', data)
		toast.success('Job Added')
		return redirect('all-jobs')
	} catch (error) {
		const customError = error as CustomActionError
		toast.error(customError.response?.data?.msg || 'An error occurred')
		return error
	}
}

const AddJob = () => {
	const { user } = useOutletContext()
	const navigation = useNavigation()

	const isSubmitting = navigation.state === 'submitting'

	return (
		<section className='w-full rounded-sm  border  pt-12 px-8 pb-16'>
			<Form method='post' className='m-0 max-w-full w-full'>
				<h4 className='capitalize mb-8'>add job</h4>
				<div className='grid gap-y-4 md:grid-cols-[1fr,1fr] md:items-center md:gap-x-4 lg:grid-cols-[1fr,1fr,1fr]'>
					<FormRow type='text' name='position' />
					<FormRow type='text' name='company' />
					<FormRow
						type='text'
						labelText='job location'
						name='jobLocation'
						defaultValue={user.location}
					/>
					<FormSelect
						labelText='job status'
						name='jobStatus'
						defaultValue={JOB_STATUS.PENDING}
						list={Object.values(JOB_STATUS)}
					/>
					<FormSelect
						labelText='job type'
						name='jobType'
						defaultValue={JOB_TYPE.FULL_TIME}
						list={Object.values(JOB_TYPE)}
					/>

					<button
						className={`${btnStyle} self-end mt-4 grid place-items-center`}
						type='submit'
						disabled={isSubmitting}>
						{' '}
						{isSubmitting ? 'adding job...' : 'add job'}
					</button>
				</div>
			</Form>
		</section>
	)
}

export default AddJob
