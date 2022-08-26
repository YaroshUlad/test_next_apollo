import React, {ReactElement} from 'react';
import styles from '../styles/Home.module.css';
import {Button} from '@mui/material';
import Router from 'next/router';

export const Header = (): ReactElement => {
	return (
		<header>
			<nav className={styles.navigate}>
				<div><h3>4 hours</h3></div>
				<div><h1>Test Next-Apollo</h1></div>
				<div>
					<Button variant={'contained'} onClick={() => Router.push('/login')}>Sign
						In</Button>
					<Button variant={'outlined'} onClick={() => Router.push('/signup')}>Sign
						Up</Button>
				</div>
			</nav>
		</header>
	);
};