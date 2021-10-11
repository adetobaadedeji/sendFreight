import React from 'react'
import Header from './components/Header'
import NewBooking from './components/NewBooking'
import MainPage from './pages/MainPage'

const App = () => {
  return (
		<div className='w-full pb-10 bg-gray-100 font-mulish'>
			<Header />
			<NewBooking />
			<MainPage />
		</div>
	)
}

export default App

