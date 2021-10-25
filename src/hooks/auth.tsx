import React, { createContext, useContext, useState } from 'react';

interface User {
	id: string;
	avatar_url: string;
	name: string;
	login: string;
}

interface AuthContextData {
	user: User | null;
	isSigning: boolean;
	signIn: () => Promise<void>;
	signOut: () => Promise<void>;
}

interface AuthProviderProps {
	children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {

	const [isSigning, setIsSigning] = useState(false);
	const [user, setsUser] = useState<User | null>(null);

	async function signIn() {

	}

	async function signOut() {
		
	}

	return (
		<AuthContext.Provider value={{signIn, signOut, user, isSigning}}>
			{children}
		</AuthContext.Provider>
	)
}

function useAuth() {
	const context = useContext(AuthContext);

	return context;
}

export { AuthProvider,  useAuth }