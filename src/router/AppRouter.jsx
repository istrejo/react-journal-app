import React from 'react';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { Routes, Route } from 'react-router-dom';
import { CheckingAuth } from '../ui/components/';
import { Navigate } from 'react-router-dom';
import { useCheckAuth } from '../hooks';

export const AppRouter = () => {
	const status = useCheckAuth();

	if (status === 'checking') {
		return <CheckingAuth />;
	}

	return (
		<Routes>
			{status === 'authenticated' ? (
				<Route path='/*' element={<JournalRoutes />} />
			) : (
				<Route path='/auth/*' element={<AuthRoutes />} />
			)}

			<Route path='/*' element={<Navigate to='/auth/login' />} />
		</Routes>
	);
};
