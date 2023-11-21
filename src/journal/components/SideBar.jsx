import { TurnedInNot } from '@mui/icons-material';
import {
	Box,
	Divider,
	Drawer,
	Grid,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

export const SideBar = ({ drawerWith = 240 }) => {
	const { displayName } = useSelector((state) => state.auth);

	return (
		<Box
			component='nav'
			sx={{
				width: { sm: drawerWith },
				maxWidth: drawerWith,
				flexShrink: { sm: 0 },
			}}
		>
			<Drawer
				variant='permanent' // temporaly
				open
				sx={{
					display: { xs: 'block' },
					'& .MuiDrawer-paper': { boxSizing: 'border-box' },
				}}
			>
				<Toolbar
					sx={{
						width: drawerWith,
					}}
				>
					<Typography variant='h6' noWrap component='div'>
						{displayName}
					</Typography>
				</Toolbar>
				<Divider />
				<List sx={{ width: drawerWith }}>
					{['Enero', 'Febrero', 'Marzo', 'Abril'].map((text) => (
						<ListItem key={text} disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<TurnedInNot />
								</ListItemIcon>
								<Grid container>
									<ListItemText primary={text} />
									<ListItemText
										secondary={'Culpa minim deserunt deserunt proident.'}
									/>
								</Grid>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
		</Box>
	);
};
