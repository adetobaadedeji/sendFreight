import React from 'react'
import {
	ArrowBack
} from '@mui/icons-material'

const NewBooking = () => {
  return (
		<div className='w-4/5 mx-auto py-1 flex flex-row items-start my-8'>
			<span className="-ml-10 md:-ml-16"><ArrowBack/></span>
			<div className='ml-5 -mt-1 md:ml-10 font-semibold'>
				<h3 className='m-0 mb-2 text-sm md:text-base'>New Booking</h3>
				<p className='font-medium text-xs md:text-sm'>
					Fill in the information below to get a quote or create a new booking
				</p>
			</div>
		</div>
	)
}

export default NewBooking
