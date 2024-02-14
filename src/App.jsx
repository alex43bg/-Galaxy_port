// import { useState } from 'react'
import '../src/index.css'
// import Hero from '../components/main/Hero'
import StarBackground from '../src/components/main/StarBackground'
import Navbar from './components/main/Navbar'
import Hero from './components/main/Hero'
import Footer from './components/main/Footer'
import Encryption from './components/main/Encryption'

function App() {

	return (
		<>
			<Navbar />
			<Hero />
			<Encryption/>
			<Footer />
			<StarBackground />
		</>
	)
}

export default App
