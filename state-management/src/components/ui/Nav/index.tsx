import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<ul>
			<Link to="/">
				<li>Homepage</li>
			</Link>
			<Link to="/about">
				<li>About</li>
			</Link>
			<Link to="/project">
				<li>Project</li>
			</Link>
		</ul>
	);
};

export default Nav;
