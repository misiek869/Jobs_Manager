type FormRowProps = {
	type: string
	name: string
	defaultValue: string
	labelText?: string
}

const FormRow = ({ type, name, labelText, defaultValue }: FormRowProps) => {
	return (
		<div className='mb-4'>
			<label
				htmlFor={name}
				className='block text-lg mb-3 capitalize tracking-wider leading-6'>
				{labelText || name}
			</label>
			<input
				className='w-full py-2 px-3 rounded-sm border '
				type={type}
				required
				id={name}
				name={name}
				defaultValue={defaultValue || ''}
			/>
		</div>
	)
}

export default FormRow
