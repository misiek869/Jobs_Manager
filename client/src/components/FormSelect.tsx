import React from 'react'

type FormSelectProps = {
	name: string
	labelText: string
	list: string[]
	defaultValue?: string
}

const FormSelect = ({
	name,
	labelText,
	list,
	defaultValue = '',
}: FormSelectProps) => {
	return (
		<div className='mb-0'>
			<label
				className='block text-lg mb-3 capitalize tracking-wider leading-6 '
				htmlFor={name}>
				{labelText || name}
			</label>

			<select
				name={name}
				id={name}
				className='w-full py-[0.375rem] px-3 outline-none rounded-sm border text-gray-900'
				defaultValue={defaultValue}>
				{list.map(item => {
					return (
						<option key={item} value={item}>
							{item}
						</option>
					)
				})}
			</select>
		</div>
	)
}

export default FormSelect
