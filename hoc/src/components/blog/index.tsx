import { FC } from 'react';
import withPost from '../withPost';

interface IProps {
	getTitleAndBody: () => any;
	getIdAndTitle: () => any;
	platform?: string;
}

const Blog: FC<IProps> = ({ getTitleAndBody, getIdAndTitle, platform }) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				marginBottom: '40px'
			}}
		>
			<h2>Blog: {platform}</h2>
			<div
				style={{ width: '400px', height: '400px', overflow: 'scroll' }}
			>
				<pre>{JSON.stringify(getIdAndTitle(), null, 4)}</pre>
			</div>
		</div>
	);
};

export default withPost(Blog);
