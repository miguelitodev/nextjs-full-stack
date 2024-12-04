import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
	return (
		<>
			<NewPost />
			<ul className={classes.posts}>
				<Post author="Miguel" body="React.js" />
				<Post author="Manuel" body="Next.js" />
			</ul>
		</>
	);
}

export default PostsList;