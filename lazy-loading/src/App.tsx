import { useState, lazy, Suspense } from 'react';

import './App.css';

// simple import
import Note from './components/Note';

// lazy loading
// const Note = lazy(() => import('./components/Note'));

function App() {
	const [render, setRender] = useState<boolean>(false);

	return (
		<div className="App">
			<div style={{ marginTop: '200px', marginBottom: '50px' }}>
				<button onClick={() => setRender(!render)}>Click Me!</button>
			</div>
			{/* simple */}
			{render && <Note />}
			{/* lazy loading */}
			{/* {render && (
				<Suspense fallback={<div>Loading...</div>}>
					<Note />
				</Suspense>
			)} */}
		</div>
	);
}

export default App;
