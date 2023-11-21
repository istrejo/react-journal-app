import {
	loginWithEmailAndPassword,
	logoutFirebase,
	registerUserWithEmailAndPassword,
	signInWithGoogle,
} from '../../firebase/providers';
import { checkingCredential, login, logout } from './';

export const checkingAuthentication = (email, password) => {
	return async (dispatch) => {
		dispatch(checkingCredential());
	};
};

export const startGoogleSignIn = () => {
	return async (dispatch) => {
		dispatch(checkingCredential());

		const result = await signInWithGoogle();

		if (!result.ok) return dispatch(logout(result));

		dispatch(login(result));
	};
};

export const startCreatingUserWithEmailAndPassword = ({
	email,
	password,
	displayName,
}) => {
	return async (dispatch) => {
		dispatch(checkingCredential());

		const result = await registerUserWithEmailAndPassword({
			email,
			password,
			displayName,
		});
		console.log(result);

		if (!result.ok) return dispatch(logout(result));

		dispatch(login(result));
	};
};

export const startLoginWithEmailAndPassword = ({ email, password }) => {
	return async (dispatch) => {
		dispatch(checkingCredential());

		const result = await loginWithEmailAndPassword({ email, password });
		console.log('Login info', result);

		if (!result.ok) return dispatch(logout(result));

		dispatch(login(result));
	};
};

export const startLogout = () => {
	return async (dispatch) => {
		dispatch(checkingCredential());

		await logoutFirebase();

		dispatch(logout());
	};
};
