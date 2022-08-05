import { createContext, useState, ReactNode, FC } from 'react';

interface AuthContextProps {
	email: string;
	setEmail: React.Dispatch<React.SetStateAction<string>>;
	isLoggedIn: boolean;
	setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextProps>({
	email: '',
	setEmail: () => {},
	isLoggedIn: false,
	setIsLoggedIn: () => {}
});

interface IProps {
	children: ReactNode;
}

const AuthProvider: FC<IProps> = ({ children }) => {
	const [email, setEmail] = useState<string>('mrsaadirfan@gmail.com');
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

	return (
		<AuthContext.Provider
			value={{
				email,
				setEmail,
				isLoggedIn,
				setIsLoggedIn
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
