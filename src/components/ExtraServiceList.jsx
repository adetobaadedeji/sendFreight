import React, { useState } from 'react'
import { Switch } from '@headlessui/react'

const ExtraServiceList = ({ title, subtitle }) => {
	const [enabled, setEnabled] = useState(false)
	return (
		<div className='py-1 flex flex-row items-start'>
			<Switch
				checked={enabled}
				onChange={setEnabled}
				className={`${enabled ? 'bg-indigo-800' : 'bg-gray-200'}
          relative inline-flex flex-shrink-0 w-14 h-8 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
			>
				<span
					aria-hidden='true'
					className={`${enabled ? 'translate-x-6' : 'translate-x-0'}
            pointer-events-none  inline-block w-7 h-7 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
				/>
			</Switch>
			<div className='ml-5 -mt-1 md:ml-8 font-semibold'>
				<h3 className='m-0 mb-1 text-sm md:text-base'>{title}</h3>
				<p className='font-medium text-xs md:text-sm'>{subtitle}</p>
			</div>
		</div>
	)
}

export default ExtraServiceList
