import { FC, useContext } from 'react';

import { AuthContext } from '../../../context/AuthContext';

type Props = {
	projectName: string;
};

const RepoCard: FC<Props> = ({ projectName }) => {
	const { email, setEmail, isLoggedIn } = useContext(AuthContext);

	return (
		<div>
			<input
				placeholder="email"
				type="text"
				onChange={e => setEmail(e.target.value)}
			/>
			<div
				style={{
					backgroundColor: '#fad',
					color: '#000',
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
					{projectName}
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
				<p
					style={{
						paddingBlock: '20px',
						fontSize: '1.2rem',
						textAlign: 'center'
					}}
				>
					Logged In: {JSON.stringify(isLoggedIn)}
				</p>
			</div>
		</div>
	);
};

export default RepoCard;
