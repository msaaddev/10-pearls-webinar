import { useState } from 'react';
import { useFetch } from './hooks';
import './App.css';

function App() {
	const [apiURL, setApiURL] = useState<string>('');
	const { data, loading, setApi } = useFetch(
		'https://jsonplaceholder.typicode.com/todos/1'
	);

	return (
		<div className="container">
			<form>
				<input
					type="text"
					value={apiURL}
					onChange={e => setApiURL(e.target.value)}
					placeholder="Enter API URL"
				/>
				<button
					type="submit"
					onClick={e => {
						e.preventDefault();
						setApi(apiURL);
					}}
				>
					Make request
				</button>
			</form>
			{loading ? (
				<p>Loading...</p>
			) : (
				<pre>{JSON.stringify(data, null, 4)}</pre>
			)}
		</div>
	);
}

export default App;
