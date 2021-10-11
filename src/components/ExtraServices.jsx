import React from 'react'
import ExtraServiceList from './ExtraServiceList'

const ExtraServices = () => {
	return (
		<section className='w-full py-9 px-8 bg-white rounded text-gray-900'>
			<h3 className='font-semibold mb-10'> Additional Services</h3>
			<div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-8'>
				<ExtraServiceList
					title='Export Forwarding'
					subtitle='We handle customs clearance and doumentation.'
				/>
				<ExtraServiceList
					title='Import Customs Clearance'
					subtitle='We handle import customs and regulatory requirements.'
				/>
				<ExtraServiceList
					title='Cargo Insurance'
					subtitle='Protect your cargo logistics risks up to the full value'
				/>
				<ExtraServiceList
					title='Transport / Delivery'
					subtitle='We deliver the cargo to your door step from the ports'
				/>
			</div>
		</section>
	)
}

export default ExtraServices
