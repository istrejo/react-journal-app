import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Collapse, Grid, Link, TextField } from '@mui/material';
import React from 'react';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailAndPassword } from '../../store/auth/thunks';
import { useMemo } from 'react';

const formData = {
	displayName: '',
	email: '',
	password: '',
};

const formValidations = {
	email: [(value) => value.includes('@'), 'El correo debe de tener un @.'],
	password: [
		(value) => value.length >= 6,
		'La contraseña debe tener más de 6 caracteres.',
	],
	displayName: [(value) => value.length >= 1, 'El nombre es obligatorio.'],
};

export const RegisterPage = () => {
	const [formSubmitted, setFormSubmitted] = useState(false);
	const { status, errorMessage } = useSelector((state) => state.auth);

	const dispatch = useDispatch();

	const {
		displayName,
		email,
		password,
		onInputChange,
		formState,
		isFormValid,
		displayNameValid,
		emailValid,
		passwordValid,
	} = useForm(formData, formValidations);

	const isAuthenticated = useMemo(() => status === 'checking', [status]);

	const onSubmit = (e) => {
		e.preventDefault();
		setFormSubmitted(true);
		if (!isFormValid) return;
		dispatch(startCreatingUserWithEmailAndPassword(formState));
	};

	return (
		<AuthLayout title='Crea una cuenta'>
			<form
				onSubmit={onSubmit}
				className='animate__animated animate__fadeIn animate__faster'
			>
				<Grid container spacing={1}>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label='Nombre completo'
							type='text'
							name='displayName'
							value={displayName}
							onChange={onInputChange}
							placeholder='John Snow'
							fullWidth
							error={!!displayNameValid && formSubmitted}
							helperText={displayNameValid}
						/>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label='Correo'
							type='email'
							name='email'
							value={email}
							onChange={onInputChange}
							placeholder='correo@gmail.com'
							fullWidth
							error={!!emailValid && formSubmitted}
							helperText={emailValid}
						/>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label='Contraseña'
							type='password'
							name='password'
							value={password}
							onChange={onInputChange}
							placeholder='***-***-***'
							fullWidth
							error={!!passwordValid && formSubmitted}
							helperText={passwordValid}
						/>
					</Grid>

					<Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
						<Grid item xs={12} md={12} display={!!errorMessage ? '' : 'none'}>
							<Collapse in={!!errorMessage}>
								<Alert severity='error' sx={{ mb: 2 }}>
									{errorMessage}
								</Alert>
							</Collapse>
						</Grid>
						<Grid item xs={12} md={12}>
							<Button
								disabled={!isFormValid || isAuthenticated}
								type='submit'
								variant='contained'
								fullWidth
							>
								Crear cuenta
							</Button>
						</Grid>
					</Grid>
					<Grid container direction='row' justifyContent='end'>
						<Link component={RouterLink} color='inherit' to='/auth/login'>
							¿Ya tienes una cuenta?
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};
