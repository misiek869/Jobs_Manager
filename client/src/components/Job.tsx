import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import day from 'dayjs'
import JobInfo from './JobInfo'
import { Form, Link } from 'react-router-dom'

const Job = ({
	_id,
	position,
	company,
	jobLocation,
	jobType,
	createdAt,
	jobStatus,
}) => {
	const date = day(createdAt).format('MMM Do, YYYY')

	return (
		<article className=' bg-orange-200 rounded-sm grid grid-rows-[1fr,auto] shadow-md'>
			<header className='py-4 px-6 border-b grid grid-cols-[auto,1fr] items-center'>
				<div className='w-[60px] h-[60px] grid place-items-center bg-orange-700 rounded-sm text-2xl font-semibold uppercase text-white mr-8'>
					{company.charAt(0)}
				</div>
				<div>
					<h5 className='mb-2'>{position}</h5>
					<p className='m-0 capitalize tracking-wider '>{company}</p>
				</div>
			</header>

			<div className='py-4 px-6'>
				<div className=' grid mt-4 mb-6 grid-cols-1 gap-y-6 items-center sm:grid-cols-2'>
					<JobInfo icon={<FaLocationArrow />} text={jobLocation} />
					<JobInfo icon={<FaCalendarAlt />} text={date} />
					<JobInfo icon={<FaBriefcase />} text={jobType} />
					{/* dynamic */}
					<div className=''>{jobStatus}</div>
				</div>
				<footer className=''>
					<Link className='' to={'/'}>
						Edit
					</Link>
					<Form>
						<button className='' type='submit'>
							Delete
						</button>
					</Form>
				</footer>
			</div>
		</article>
	)
}

export default Job
