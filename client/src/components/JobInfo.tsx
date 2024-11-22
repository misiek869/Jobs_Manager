import React from 'react'

const JobInfo = ({ icon, text }) => {
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
