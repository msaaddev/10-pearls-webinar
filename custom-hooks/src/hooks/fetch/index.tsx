import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
	const [api, setApi] = useState<string>(url);
	const [data, setData] = useState<any>();
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<any>();

	useEffect(() => {
		setLoading(true);
		fetch(api)
			.then(res => res.json())
			.then(data => {
				setData(data);
				setLoading(false);
			})
			.catch(error => {
				setError(error);
				setLoading(false);
			});
	}, [api]);

	return { data, loading, error, setApi };
};

export default useFetch;
