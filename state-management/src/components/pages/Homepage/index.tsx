import { Nav } from '../../ui';

const Homepage = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				alignItems: 'center',
				height: '100vh'
			}}
		>
			<h2>Navigation</h2>
			<Nav />
		</div>
	);
};

export default Homepage;
