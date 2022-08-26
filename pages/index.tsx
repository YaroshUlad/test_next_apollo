import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {Header} from '../components/Header';
import {Post} from '../components/Post';
import client from '../apollo-client';
import {
	GetAllLinksDocument, GetLinksPaginationDocument,
	Link
} from '../dal/generated/graphql';
import {useEffect, useState} from 'react';
import {GetServerSideProps, InferGetServerSidePropsType} from 'next';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const {data} = await client.query({
		query: GetAllLinksDocument
	});

	return {
		props: data
	};
};

const Home = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
		const [posts, setPosts] = useState(props.feed.links.slice(0, 4));
		const [fetching, setFetching] = useState(false);
		const [count, setCount] = useState(props.feed.count);
		const [skip, setSkip] = useState(4);

		useEffect(() => {

			try {
				const res = client.query({
					query: GetLinksPaginationDocument,
					variables: {
						take: 4, skip: skip
					}
				});
				res.then(res => {
					setPosts([...posts, ...res.data.feed.links]);
					setCount(res.data.feed.count);
					setSkip(skip + 4);
				});
			} catch (e) {
				console.log(e);
			} finally {
				setFetching(false);
			}
		}, [fetching]);

		useEffect(() => {
			document.addEventListener('scroll', scrollHandler);

			return () => {
				document.removeEventListener('scroll', scrollHandler);
			};
		}, []);

		const scrollHandler = (e: Event) => {

			if (e.target!.documentElement.scrollHeight - e.target!.documentElement!.scrollTop -
				window.innerHeight < 5 && posts.length <= count) {
				setFetching(true);
			}

		};
		return (
			<div className={styles.container}>
				<Head>
					<title>All posts</title>
					<meta name="description" content="All posts"/>
					<link rel="icon" href="/favicon.ico"/>
				</Head>
				<Header/>
				<main className={styles.main}>
					{posts && posts.map((i: Link) => {
						return <Post votes={i.votes} key={i.id} postId={i.id} description={i.description} linkURL={i.url}/>;
					})}
				</main>
			</div>
		);
	}
;

export default Home;
