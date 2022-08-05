import { useState, useMemo, useCallback, useEffect } from 'react';

import './App.css';

// simple import
import Note from './components/Note';

function App() {
	const [postId, setPostId] = useState<number>(1);
	const [render, setRender] = useState<boolean>(false);
	const [response, setResponse] = useState<any>();

	// use memo
	console.log('I am inside the component. :(');

	const notes = useMemo(() => {
		console.log('I am in useMemo');

		// complex computation
		return 4242 + 2141;
	}, []);

	// use callback

	const getData = useCallback(async (): Promise<void> => {
		try {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/todos/${postId}`
			);
			const data = await response.json();
			// uncomment
			// console.log(data);
			setResponse(data);
		} catch (err) {
			console.log(err);
		}
	}, [postId]);

	useEffect(() => {
		getData();
	}, [getData]);

	return (
		<div className="App">
			<div style={{ marginTop: '200px', marginBottom: '50px' }}>
				<button onClick={() => setRender(!render)}>Click Me!</button>
			</div>
			{notes}
			{render && <Note />}
			<div style={{ marginTop: '100px', marginBottom: '50px' }}>
				<button onClick={() => setPostId(prevState => prevState + 1)}>
					Next Post
				</button>
			</div>
			<div
				style={{ width: '400px', height: '400px', overflow: 'scroll' }}
			>
				<pre>{JSON.stringify(response, null, 4)}</pre>
			</div>
		</div>
	);
}

export default App;
