import Job from './Job'
import { useAllJobsContext } from '../pages/AllJobs'

const JobsContainer = () => {
	const { data } = useAllJobsContext()
	const { jobs } = data

	if (jobs.length === 0) {
		return (
			<section className='mt-16'>
				<h2 className=''>No jobs to display right now...</h2>
			</section>
		)
	}

	return (
		<section className='mt-16'>
			<div className='grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-8'>
				{jobs.map(job => {
					return <Job key={job._id} {...job} />
				})}
			</div>
		</section>
	)
}

export default JobsContainer
