import { FC } from 'react';

const Note: FC = () => {
	return (
		<div
			style={{
				backgroundColor: '#292a44',
				color: '#fcfcfc',
				width: '400px',
				borderRadius: '5px'
			}}
		>
			<p
				style={{
					paddingBlock: '20px',
					fontSize: '1.2rem',
					textAlign: 'center'
				}}
			>
				Saad Irfan - 10Pearls University
			</p>
		</div>
	);
};

export default Note;
