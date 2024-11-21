import { Form, useNavigation, useOutletContext } from 'react-router-dom'
import { FormRow } from '../components'

const AddJob = () => {
	const { user } = useOutletContext()
	const navigation = useNavigation()

	const isSubmitting = navigation.state === 'submitting'

	return (
		<section className='w-full rounded-sm bg-red-300 pt-12 px-8 pb-16'>
			<Form method='post' className='m-0 max-w-full w-full'>
				<h4 className='capitalize mb-8'>add job</h4>
				<div className='grid gap-y-4'>
					<FormRow type='text' name='position' />
				</div>
			</Form>
		</section>
	)
}

export default AddJob
