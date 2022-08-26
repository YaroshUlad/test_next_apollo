import React, {ReactElement} from 'react';

import {Paper} from '@mui/material';

import style from './FormWrapper.module.css';

export const FormWrapper = (props: PropsType): ReactElement => (
	<Paper className={style.paper} elevation={12}>
		<h2>Test Next-Apollo</h2>
		<h3>{props.title}</h3>
		{props.children}
	</Paper>
);


type PropsType = {
	children: React.ReactNode;
	title: string;
};
