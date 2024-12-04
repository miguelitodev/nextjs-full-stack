/* eslint-disable react/prop-types */
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
import { useState } from "react";

function PostsList({ isPosting, onStopPosting }) {
	const [posts, setPosts] = useState([]);

	function addPostHandler(postData) {
		setPosts((previousValue) => [postData, ...previousValue]);
	}

	return (
		<>
			{isPosting && (
				<Modal onClose={onStopPosting}>
					<NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
				</Modal>
			)}

			<ul className={classes.posts}>
				<Post author="Manuel" body="Next.js" />
			</ul>
		</>
	);
}

export default PostsList;
