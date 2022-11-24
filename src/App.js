import { useEffect, useState } from "react";
import "./App.css";
import AddPost from "./components/AddPost/AddPost";
import Header from "./components/Header/Header";
import PostsList from "./components/PostsList/PostsList";
import { defaultTags } from "./data/defaultTags";

function App() {
	const [link, setLink] = useState("");
	const [name, setName] = useState("");
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [headerTags, setHeaderTags] = useState(defaultTags);
	const [sidebarTags, setSidebarTags] = useState(defaultTags);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const getPosts = async () => {
			const response = await fetch("http://localhost:3005/api/posts", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await response.json();
			setPosts(data.playload);
		};

		getPosts();
	}, []);

	function headerHandler(e) {
		const tag = e.target.dataset.id;
		setHeaderTags({ ...headerTags, [tag]: !headerTags[tag] });
	}

	function sideHandler(e) {
		const tag = e.target.dataset.id;
		setSidebarTags({ ...sidebarTags, [tag]: !sidebarTags[tag] });
	}

	return (
		<div className="App">
			<AddPost
				checked={headerTags}
				changeFunction={headerHandler}
				setTitle={setTitle}
				title={title}
				link={link}
				setLink={setLink}
				name={name}
				setName={setName}
				description={description}
				setDescription={setDescription}
			/>
			<div>
				<Header changeFunction={sideHandler} checked={sidebarTags} />
				<PostsList posts={posts} />
			</div>
		</div>
	);
}
export default App;
