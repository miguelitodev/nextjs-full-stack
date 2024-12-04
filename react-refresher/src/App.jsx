import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {
	const [modalIsVisible, setModalIsVisible] = useState(false);

	function visibleModalHandler() {
		setModalIsVisible(!modalIsVisible);
	}

	return (
		<>
			<MainHeader onCreatePost={visibleModalHandler} />
			<main>
				<PostsList
					isPosting={modalIsVisible}
					onStopPosting={visibleModalHandler}
				/>
			</main>
		</>
	);
}

export default App;
