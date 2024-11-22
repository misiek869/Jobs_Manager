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
		<>
			<header>
				{/* main icon */}
				<div className=''>{company.charAt(0)}</div>
				<div className=''>
					<h5>{position}</h5>
					<p>{company}</p>
				</div>
			</header>
			{/* content */}
			<div className=''>
				<div className=''>
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
		</>
	)
}

export default Job
