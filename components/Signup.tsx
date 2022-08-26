import React, {ReactElement} from 'react';

import {FormWrapper} from './forms/FormWrapper';
import Link from 'next/link';
import { SignUpForm } from './forms/common/SignUpForm';

const Signup = (): ReactElement => {
	return (
		<FormWrapper title={'SignUp'}>
			<SignUpForm/>
			<p>Already have an account?</p>
			<Link href={'/login'}><a>Sing In</a></Link>
		</FormWrapper>
	);
};

export default Signup