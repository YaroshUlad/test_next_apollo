import React, {useState} from 'react';
import {Button, Dialog, DialogContent, DialogTitle, Paper} from '@mui/material';

import styles from '../styles/Post.module.css';
import Link from 'next/link';
import {Vote, VoteDocument} from '../dal/generated/graphql';
import {useMutation} from '@apollo/client';
import {spans} from 'next/dist/build/webpack/plugins/profiling-plugin';

type PostProps = {
	description: string
	linkURL: string
	postId: string
	votes: Vote[]
}

export const Post = (props: PostProps) => {
	const {description, linkURL, postId, votes} = props;
	const [vote, {data}] = useMutation(VoteDocument);
	const [votesList, setVotesList] = useState(votes.slice(0, 6));
	const [open, setOpen] = useState(false)

	const votesLength = votes.length;
	const restVotes = votesLength - votesList.length

	const voteHandler = async () => {
		try {
			const res = await vote({
				variables: {
					linkId: postId
				},
				context: {
					headers: {
						'Authorization': `Bearer ${localStorage.getItem('token')}`
					}
				}
			});
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<Paper className={styles.postWrapper} elevation={12}>
			<div className={styles.description}>
				<Link href={linkURL}>
					<a target={'_blank'}>
						<h2>{description}</h2>
					</a>
				</Link>
			</div>
			<div className={styles.actionsArea}>
				<div>
					<Button onClick={voteHandler} disabled={ !!data}>Upvote</Button>
				</div>
				<div className={styles.votes} onClick={()=>setOpen(true)}>
					{votes.length > 0 ? votesList.map(el => {
							return <div className={styles.voters}
							            key={el.id}>{el.user.name[0] ? el.user.name[0].toUpperCase()
								: 'U'
							}</div>;
						})
						: <div className={styles.votes}>not upvote</div>
					}
					{restVotes > 0 ? '+' + restVotes : ''}
				</div>
			</div>
			<Dialog
				open={open}
				onClose={()=>setOpen(false)}>
				<DialogTitle>Upvotes</DialogTitle>
				<DialogContent>
					<div style={{"width": '300px'}}>
						{votes.length > 0 ? votes.map(el => {
								return (
									<><span className={styles.voters}
									         key={el.id}>{el.user.name[0] ? el.user.name[0].toUpperCase()
										: 'U'
									}</span>
									<span>{el.user.name}</span>
									</>
								)
							})
							: <div className={styles.votes}>not upvote</div>
						}
					</div>
				</DialogContent>
			</Dialog>
		</Paper>
	);
};
