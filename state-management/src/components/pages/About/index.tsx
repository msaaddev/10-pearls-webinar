import { Nav, Card } from '../../ui';

const About = () => {
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
			<Nav />
			<h2>About</h2>
			<Card text="This is a card" />
		</div>
	);
};

export default About;
