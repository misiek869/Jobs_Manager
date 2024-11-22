import customFetch from '../utils/customFetch'

export const loader = async () => {
	try {
		const data = await customFetch.get('/dashboard/edit-job/:id')
		console.log(data)
	} catch (error) {}
}

const EditJob = () => {
	return <div>EditJob</div>
}

export default EditJob
