import React, {ReactElement} from 'react';

import {FormWrapper} from './forms/FormWrapper';
import Link from 'next/link';
import {LoginForm} from './forms/common/LogInForm';

const Login = (): ReactElement => {


	return (
		<FormWrapper title={'SignIn'}>
			<LoginForm/>
			<p>Do not have an account?</p>
			<Link href={'/signup'}><a>Sing up</a></Link>
		</FormWrapper>
	);
};

export default Login;