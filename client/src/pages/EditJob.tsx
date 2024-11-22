import { useParams } from 'react-router-dom'
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify'
import { CustomActionError } from '../utils/type'

export const loader = async ({ params }) => {
	try {
		const { data } = await customFetch.get(`/jobs/${params.id}`)
		console.log(data)
		return null
	} catch (error) {
		const customError = error as CustomActionError
		toast.error(customError.response?.data?.msg || 'An error occurred')
		return error
	}
}

export const action = async => {
	return null
}

const EditJob = () => {
	const params = useParams()

	return <div>EditJob</div>
}

export default EditJob
