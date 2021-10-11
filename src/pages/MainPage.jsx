import React from 'react'
import CargoDetails from '../components/CargoDetails'
import ExtraServices from '../components/ExtraServices'
import ImportExport from '../components/ImportExport'
import Services from '../components/Services'

const MainPage = () => {
	return (
		<div className="w-4/5 mx-auto space-y-5">
			<Services />
			<ImportExport />
			<CargoDetails />
			<ExtraServices />
		</div>
	)
}

export default MainPage
