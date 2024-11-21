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
			{/* form label */}
			<label className='' htmlFor={name}>
				{labelText || name}
			</label>
			{/* form select */}
			<select name={name} id={name} className='' defaultValue={defaultValue}>
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
