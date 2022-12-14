import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ClientOnly from '../components/ClientOnly';
import Login from '../components/Login';

const LoginPage = () => {

	return (
		<div className={styles.container}>
			<Head>
				<title>Login</title>
				<meta name="description" content="Generated by create next app"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<ClientOnly>
				<Login/>
			</ClientOnly>
		</div>
	);
};

export default LoginPage;