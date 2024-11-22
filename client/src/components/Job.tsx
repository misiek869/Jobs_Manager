import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import day from 'dayjs'
import JobInfo from './JobInfo'
import { Form, Link } from 'react-router-dom'
import { btnStyle } from '../pages/Register'

type JobProps = {
	_id: string
	position: string
	company: string
	jobLocation: string
	jobType: string
	createdAt: string
	jobStatus: string
}

const Job = ({
	_id,
	position,
	company,
	jobLocation,
	jobType,
	createdAt,
	jobStatus,
}: JobProps) => {
	const date = day(createdAt).format('MMM Do, YYYY')

	return (
		<article className='border bg-orange-700 rounded-xl grid grid-rows-[1fr,auto] shadow-md'>
			<header className='py-4 px-6 border-b grid grid-cols-[auto,1fr] items-center'>
				<div className='w-[60px] h-[60px] grid place-items-center bg-white rounded-sm text-3xl font-semibold uppercase text-stone-900 mr-8'>
					{company.charAt(0)}
				</div>
				<div>
					<h5 className='mb-2 text-2xl  text-stone-900 font-semibold'>
						{position}
					</h5>
					<p className='m-0 capitalize tracking-wider font-medium text-xl text-stone-900'>
						{company}
					</p>
				</div>
			</header>

			<div className='py-4 px-6'>
				<div className=' grid mt-4 mb-6 grid-cols-1 gap-y-6 items-center sm:grid-cols-2'>
					<JobInfo icon={<FaLocationArrow />} text={jobLocation} />
					<JobInfo icon={<FaCalendarAlt />} text={date} />
					<JobInfo icon={<FaBriefcase />} text={jobType} />
					{/* dynamic */}
					<div className='rounded-sm capitalize tracking-wider text-center flex items-center font-semibold'>
						Status: {jobStatus}
					</div>
				</div>
				<footer className='mt-4 flex items-center'>
					<Link
						className={`${btnStyle} h-[30px] bg-white text-stone-900  text-xl flex items-center mr-2 mb-0`}
						to={`/dashboard/edit-job/${_id}`}>
						Edit
					</Link>
					<Form>
						<button
							className={`${btnStyle} h-[30px] bg-white text-stone-900  text-xl flex items-center mb-0`}
							type='submit'>
							Delete
						</button>
					</Form>
				</footer>
			</div>
		</article>
	)
}

export default Job
