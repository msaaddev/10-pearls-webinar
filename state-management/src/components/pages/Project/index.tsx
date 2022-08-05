import { Nav, RepoCard } from '../../ui';

const Project = () => {
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
			<h2>Project</h2>
			<RepoCard projectName="create-next-pwa" />
		</div>
	);
};

export default Project;
