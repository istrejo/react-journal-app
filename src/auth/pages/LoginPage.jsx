import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import {
	Alert,
	Button,
	Collapse,
	Grid,
	Link,
	TextField,
	Typography,
} from '@mui/material';
import React from 'react';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/';
import {
	startGoogleSignIn,
	startLoginWithEmailAndPassword,
} from '../../store/auth/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';

export const LoginPage = () => {
	const { status, errorMessage } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const { email, password, onInputChange, formState } = useForm({
		email: '',
		password: '',
	});

	const isAuthenticated = useMemo(() => status === 'checking', [status]);

	const onSubmit = (e) => {
		e.preventDefault();

		dispatch(startLoginWithEmailAndPassword(formState));
	};

	const onGoogleSignIn = () => {
		dispatch(startGoogleSignIn());
	};

	return (
		<AuthLayout title='Inicia sesión'>
			<form className='animate__animated animate__fadeIn animate__faster'>
				<Grid container spacing={1}>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label='Correo'
							type='email'
							name='email'
							value={email}
							onChange={onInputChange}
							placeholder='correo@gmail.com'
							fullWidth
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
						<Grid item xs={12} md={6}>
							<Button
								onClick={onSubmit}
								disabled={isAuthenticated}
								variant='contained'
								fullWidth
							>
								Login
							</Button>
						</Grid>
						<Grid item xs={12} md={6}>
							<Button
								onClick={onGoogleSignIn}
								disabled={isAuthenticated}
								variant='contained'
								fullWidth
							>
								<Google />
								<Typography sx={{ ml: 1 }}>Google</Typography>
							</Button>
						</Grid>
					</Grid>
					<Grid container direction='row' justifyContent='end'>
						<Link component={RouterLink} color='inherit' to='/auth/register'>
							Crear una cuenta
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};
