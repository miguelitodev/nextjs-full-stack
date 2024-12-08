/* eslint-disable react/prop-types */
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useState } from "react";
import { useEffect } from "react";

function PostsList() {
	const [posts, setPosts] = useState([]);
	const [isFetching, setIsFetching] = useState(false);

	useEffect(() => {
		async function fetchPosts() {
			setIsFetching(true);
			const response = await fetch("http://localhost:8080/posts");
			const resData = await response.json();
			setPosts(resData.posts);
			setIsFetching(false);
		}
		fetchPosts();
	}, []);

	function addPostHandler(postData) {
		fetch("http://localhost:8080/posts", {
			method: "POST",
			body: JSON.stringify(postData),
			headers: {
				"Content-Type": "application/json",
			},
		});
		setPosts((previousValue) => [postData, ...previousValue]);
	}

	return (
		<>
			{!isFetching && posts.length > 0 && (
				<ul className={classes.posts}>
					{posts.map(({ author, body }) => (
						<Post key={body} author={author} body={body} />
					))}
				</ul>
			)}

			{!isFetching && posts.length === 0 && (
				<div style={{ textAlign: "center", color: "white" }}>
					<h2>There are no posts yet.</h2>
					<p>Start adding some!</p>
				</div>
			)}

			{isFetching && (
				<p style={{ textAlign: "center", color: "white" }}>Loading...</p>
			)}
		</>
	);
}

export default PostsList;
