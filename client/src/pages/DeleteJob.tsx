import { toast } from 'react-toastify'
import customFetch from '../utils/customFetch'
import { redirect } from 'react-router-dom'
import { CustomActionError } from '../utils/type'
import { ActionFunctionArgs } from 'react-router-dom'

export const action = async ({ params }: ActionFunctionArgs) => {
	try {
		await customFetch.delete(`/jobs/${params.id}`)
		toast.success('Job Deleted')
	} catch (error) {
		const customError = error as CustomActionError
		toast.error(customError.response?.data?.msg || 'An error occurred')
	}

	return redirect('/dashboard/all-jobs')
}
