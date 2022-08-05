import { Routes, Route } from 'react-router-dom';
import { Homepage, About, Project } from './components/pages';

import { AuthProvider } from './context/AuthContext';

import './App.css';

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/project" element={<Project />} />
			</Routes>
		</div>
	);
}

export default App;
