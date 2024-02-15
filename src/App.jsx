// import { useState } from 'react'
import '../src/index.css'
// import Hero from '../components/main/Hero'
import StarBackground from '../src/components/main/StarBackground'
import Navbar from './components/main/Navbar'
import Hero from './components/main/Hero'
import Footer from './components/main/Footer'
import Encryption from './components/main/Encryption'
import Skills from './components/main/Skills'
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function App() {

	return (
		<>
			<Navbar />
			<Hero />
			<Skills />
			<Encryption />
			<Footer />
			{/* <StarBackground /> */}
		</>
	)
}

export default App
