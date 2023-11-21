import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { ImageGallery } from '../components';

export const NoteView = ({ activeNote }) => {
	return (
		<Grid
			container
			className='animate__animated animate__fadeIn animate__faster'
			direction='row'
			justifyContent='space-between'
			alignItems='center'
			sx={{ mb: 1 }}
		>
			<Grid item>
				<Typography fontSize={39} fontWeight='light'>
					6 de septiembre, 2023
				</Typography>
			</Grid>
			<Grid>
				<Button color='primary' sx={{ padding: 2 }}>
					<SaveOutlined sx={{ fontSize: 30, mr: 1 }} /> Guardar
				</Button>
			</Grid>

			<Grid container>
				<TextField
					type='text'
					variant='filled'
					fullWidth
					placeholder='Ingrese un título'
					label='Título'
					multiline
					sx={{ border: 'none', mb: 1 }}
					value={activeNote.title}
				/>
				<TextField
					type='text'
					variant='filled'
					fullWidth
					placeholder='¿Qué sucedio el día de hoy?'
					label='Descripción'
					multiline
					minRows={5}
					sx={{ border: 'none', mb: 1 }}
					value={activeNote.body}
				/>
			</Grid>

			{/* Image gallery */}
			<ImageGallery />
		</Grid>
	);
};
