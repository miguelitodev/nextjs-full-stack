/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import classes from "./Post.module.css";

function Post(props) {
	return (
		<li className={classes.post}>
			<Link to={props.id}>
				<p className={classes.author}>{props.author}</p>
				<p className={classes.text}>{props.body}</p>
			</Link>
		</li>
	);
}

export default Post;
