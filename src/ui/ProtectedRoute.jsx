import styled from 'styled-components';

import { useUser } from '../features/authentication/useUser';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FullPage = styled.div`
	height: 100vh;
	background-color: var() (--color-grey-50);
	display: flex;
	align-items: center;
	justify-content: center;
`;

function ProtectedRoute({ children }) {
	const navigate = useNavigate();

	// load authenticated user
	const { isLoading, isAuthenticated } = useUser();

	// if no auth user, redirect to login
	useEffect(
		function () {
			if (!isAuthenticated && !isLoading) navigate('/login');
		},
		[isAuthenticated, isLoading, navigate]
	);

	// show spinner while loading
	if (isLoading)
		return (
			<FullPage>
				<Spinner />;
			</FullPage>
		);

	// if user, render app
	return children;
}

export default ProtectedRoute;
