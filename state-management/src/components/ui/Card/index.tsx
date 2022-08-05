import { FC, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

type Props = {
	text: string;
};

const Card: FC<Props> = ({ text }) => {
	const { email } = useContext(AuthContext);

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
				{text}
			</p>
			<p
				style={{
					paddingBlock: '20px',
					fontSize: '1.2rem',
					textAlign: 'center'
				}}
			>
				Email: {email}
			</p>
		</div>
	);
};

export default Card;
