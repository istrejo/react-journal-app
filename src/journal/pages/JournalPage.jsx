import React from 'react';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { startNewNote } from '../../store/journal/thunks';

export const JournalPage = () => {
	const { isSaving, active } = useSelector((state) => state.journal);

	const dispatch = useDispatch();

	const onNewNote = () => {
		dispatch(startNewNote());
	};

	return (
		<JournalLayout>
			{!!active ? <NoteView activeNote={active} /> : <NothingSelectedView />}

			<IconButton
				onClick={onNewNote}
				disabled={isSaving}
				size='large'
				sx={{
					color: 'white',
					backgroundColor: 'error.main',
					':hover': { backgroundColor: 'error.main', opacity: 0.9 },
					position: 'fixed',
					right: 50,
					bottom: 50,
				}}
			>
				<AddOutlined sx={{ fontSize: 30 }} />
			</IconButton>
		</JournalLayout>
	);
};
