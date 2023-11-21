import {
	GoogleAuthProvider,
	signInWithPopup,
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
	try {
		const result = await signInWithPopup(FirebaseAuth, googleProvider);
		// const credential = await GoogleAuthProvider.credentialFromResult(result);

		const { displayName, email, photoURL, uid } = result.user;

		return {
			ok: true,
			// user info
			displayName,
			email,
			photoURL,
			uid,
		};
	} catch (error) {
		const errorMessage = error.message;

		return {
			ok: false,
			errorMessage,
		};
	}
};

export const registerUserWithEmailAndPassword = async ({
	email,
	password,
	displayName,
}) => {
	try {
		const res = await createUserWithEmailAndPassword(
			FirebaseAuth,
			email,
			password
		);
		const { uid, photoURL } = res.user;

		await updateProfile(FirebaseAuth.currentUser, { displayName: displayName });

		return {
			ok: true,
			uid,
			photoURL,
			displayName,
			email,
		};
	} catch (error) {
		return { ok: false, errorMessage: error.message };
	}
};

export const loginWithEmailAndPassword = async ({ email, password }) => {
	try {
		const res = await signInWithEmailAndPassword(FirebaseAuth, email, password);
		const { uid, photoURL, displayName } = res.user;

		console.log({ uid, photoURL, displayName });

		return {
			ok: true,
			uid,
			email,
			photoURL,
			displayName,
		};
	} catch (error) {
		return { ok: false, errorMessage: error.message };
	}
};

export const logoutFirebase = async () => {
	return await FirebaseAuth.signOut();
};
