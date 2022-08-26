import React, {ReactElement} from 'react';

import {
	Button,
	FormControl,
	TextField,
} from '@mui/material';
import {useFormik} from 'formik';
import {logInSchema} from '../../../common/validation/formValidation';
import {PasswordWithVisibility} from './PasswordWithVisibility';
import {
	LoginDocument,
	LoginMutation,
	LoginMutationVariables
} from '../../../dal/generated/graphql';
import {useMutation} from '@apollo/client';
import Router from 'next/router';

export const LoginForm = (): ReactElement => {

	const [loginMut, {loading}] = useMutation<LoginMutation, LoginMutationVariables>(LoginDocument,
		{
			variables: {
				email: '',
				password: '',
			}
		}
	);

	const loginForm = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: logInSchema,
		onSubmit: async (values, {resetForm}) => {
			try {
				const {data} = await loginMut({variables: values});
				if (typeof data!.login!.token === 'string') {
					// @ts-ignore
					localStorage.setItem('token', data.login.token);
				}
				Router.push('/');
				resetForm();
			} catch (e) {
				console.error(e);
			}
		},
	});


	return (
		<div>
			<form onSubmit={loginForm.handleSubmit}>
				<FormControl>
					<TextField
						label="Email"
						margin="normal"
						variant="standard"
						error={loginForm.touched.email && Boolean(loginForm.errors.email)}
						helperText={loginForm.touched.email && loginForm.errors.email}
						{...loginForm.getFieldProps('email')}
					/>
					<PasswordWithVisibility
						error={loginForm.touched.password && Boolean(loginForm.errors.password)}
						helperText={loginForm.touched.password && loginForm.errors.password}
						formikFieldProps={loginForm.getFieldProps('password')}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{mt: 3, mb: 2}}
						disabled={loading}
					>
						Sign In
					</Button>
				</FormControl>
			</form>
		</div>
	);
};

