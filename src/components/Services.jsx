import React from 'react'
import ServiceCard from './ServiceCard'
import { Icon } from 'semantic-ui-react'

const Services = () => {
	return (
		<section className='w-full py-7 px-8 space-y-8 bg-white mt-8 rounded'>
			<h3 className='font-semibold'> Select a service</h3>
			<div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
				<div className='relative overflow-hidden text-gray-500 hover:text-white rounded'>
					<ServiceCard title='Air Freight' />
					<Icon
						className='absolute -bottom-2 overflow-hidden -right-7 rounded hover:text-gray-500'
						name='plane'
						rotated='counterclockwise'
						size='huge'
					/>
				</div>
				<div className='relative overflow-hidden text-gray-500 hover:text-white rounded'>
					<ServiceCard title='Sea Freight' />
					<Icon
						className='absolute -bottom-3 overflow-hidden -right-5 hover:text-gray-500 '
						name='ship'
						size='huge'
					/>
				</div>
				<div className='relative overflow-hidden text-gray-500 hover:text-white rounded'>
					<ServiceCard title='Inland' subtitle='(Truck & Barge)' />
					<Icon
						className='absolute -bottom-2 overflow-hidden -right-1 hover:text-gray-500'
						name='truck'
						size='huge'
					/>
				</div>
				<div className='relative overflow-hidden text-gray-500 hover:text-white rounded'>
					<ServiceCard title='Customs' subtitle='Clearance' />
					<Icon
						className='absolute -bottom-2 overflow-hidden -right-1 hover:text-gray-500'
						name='warehouse'
						size='huge'
					/>
				</div>
			</div>
		</section>
	)
}

export default Services
