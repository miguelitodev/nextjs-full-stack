/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
	const posts = useLoaderData();

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
			{posts.length > 0 && (
				<ul className={classes.posts}>
					{posts.map(({ author, body }) => (
						<Post key={body} author={author} body={body} />
					))}
				</ul>
			)}

			{posts.length === 0 && (
				<div style={{ textAlign: "center", color: "white" }}>
					<h2>There are no posts yet.</h2>
					<p>Start adding some!</p>
				</div>
			)}
		</>
	);
}

export default PostsList;
