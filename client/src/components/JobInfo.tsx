import React from 'react'

type JobInfoProps = {
	icon: React.ReactNode
	text: string
}

const JobInfo = ({ icon, text }: JobInfoProps) => {
	return (
		<div className='flex items-center'>
			<span className='text-[1rem] mr-4 flex items-center text-orange-700'>
				{icon}
			</span>
			<span className='capitalize tracking-wider'>{text}</span>
		</div>
	)
}

export default JobInfo