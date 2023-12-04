// Import BrowserRouter from react-router-dom
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { SignIn } from './pages/components/SignIn'
import { Navbar } from './pages/components/navbar'
import { IjaraPage } from './pages/ijara-page'
import { WelcomePage } from './pages/welcome-page'

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				{/* <Route path='/' element={<Page />} /> */}
				<Route path='/' element={<WelcomePage />} />
				<Route path='/ijara' element={<IjaraPage />} />
				<Route path='sign-in' element={<SignIn />} />
			</Routes>
		</>
	)
}

export default App
