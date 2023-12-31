import { LogoutOutlined } from '@mui/icons-material';
import { MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth/thunks';

export const NavBar = ({ drawerWidth = 240 }) => {
	const dispatch = useDispatch();

	const onLogout = () => {
		dispatch(startLogout());
	};

	return (
		<AppBar
			position='fixed'
			sx={{
				width: { md: `calc(100% - ${drawerWidth}px)` },
				ml: { md: `${drawerWidth}px` },
			}}
		>
			<Toolbar>
				<IconButton
					color='inherit'
					edge='start'
					sx={{ mr: 2, display: { md: 'none ' } }}
				>
					<MenuOutlined />
				</IconButton>

				<Grid
					container
					direction='row'
					justifyContent='space-between'
					alignItems='center'
				>
					<Typography variant='h6' noWrap component='div'>
						JournalApp
					</Typography>
					<IconButton onClick={onLogout} color='error'>
						<LogoutOutlined />
					</IconButton>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};
