import { FC } from 'react';
import withPost from '../withPost';

interface IProps {
	getTitleAndBody: () => any;
	getIdAndTitle: () => any;
	author?: string;
}

const Guide: FC<IProps> = ({ getTitleAndBody, getIdAndTitle, author }) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center'
			}}
		>
			<h2>Guides: {author}</h2>
			<div
				style={{ width: '400px', height: '400px', overflow: 'scroll' }}
			>
				<pre>{JSON.stringify(getTitleAndBody(), null, 4)}</pre>
			</div>
		</div>
	);
};

export default withPost(Guide);
