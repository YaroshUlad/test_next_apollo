import React, {ReactElement, useState} from 'react';

import {Button, FormControl, FormGroup, TextField} from '@mui/material';
import {useFormik} from 'formik';

import {PasswordWithVisibility} from './PasswordWithVisibility';
import {signUpSchema} from '../../../common/validation/formValidation';
import {useMutation} from '@apollo/client';
import {SignupDocument} from '../../../dal/generated/graphql';
import Router from 'next/router';

export const SignUpForm = (): ReactElement => {
	const [signUP, {loading}] = useMutation(SignupDocument, {
		variables: {
			name: '',
			email: '',
			password: '',
		}
	});

	const registerForm = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		validationSchema: signUpSchema,
		onSubmit: async (values, {resetForm}) => {
			try {
				const res = await signUP({
					variables: values
				});
				console.log(res.data.signup.token);
				resetForm();
				await Router.push('/')
			}
			catch (e) {
				console.error(e)
			}
		},
	});
	console.log(loading);
	return (
		<form onSubmit={registerForm.handleSubmit}>
			<FormControl>
				<FormGroup>
					<TextField
						label="Name"
						margin="normal"
						variant="standard"
						error={registerForm.touched.name && Boolean(registerForm.errors.name)}
						helperText={registerForm.touched.name && registerForm.errors.name}
						{...registerForm.getFieldProps('name')}
					/>

					<TextField
						label="Email"
						margin="normal"
						variant="standard"
						error={registerForm.touched.email && Boolean(registerForm.errors.email)}
						helperText={registerForm.touched.email && registerForm.errors.email}
						{...registerForm.getFieldProps('email')}
					/>

					<PasswordWithVisibility
						error={registerForm.touched.password && Boolean(registerForm.errors.password)}
						helperText={registerForm.touched.password && registerForm.errors.password}
						formikFieldProps={registerForm.getFieldProps('password')}
					/>

					<PasswordWithVisibility
						error={
							registerForm.touched.confirmPassword &&
							Boolean(registerForm.errors.confirmPassword)
						}
						helperText={
							registerForm.touched.confirmPassword && registerForm.errors.confirmPassword
						}
						formikFieldProps={registerForm.getFieldProps('confirmPassword')}
					/>

					<Button
						type="submit"
						variant="contained"
						color="primary"
						disabled={loading}
					>
						Register
					</Button>
				</FormGroup>
			</FormControl>
		</form>
	);
};
