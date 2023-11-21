import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, savingNewNote, setActiveNote } from './journalSlice';

export const startNewNote = () => {
	return async (dispatch, getState) => {
		// todo - isCreatingNewNote
		dispatch(savingNewNote());

		const { uid } = getState().auth;

		const newNote = {
			title: 'Hola soy el titulo de la nota',
			body: 'soy el cuerpo de la nota',
			date: new Date().getTime(),
		};

		const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
		await setDoc(newDoc, newNote);

		newNote.id = newDoc.id;

		//! dispatch

		dispatch(addNewEmptyNote(newNote));
		dispatch(setActiveNote(newNote));
	};
};
