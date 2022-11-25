import { useEffect, useState } from "react";
import "./App.css";
import AddPost from "./components/AddPost/AddPost";
import Header from "./components/Header/Header";
import PostsList from "./components/PostsList/PostsList";
import { defaultTags } from "./data/defaultTags";

function App() {
	const [posts, setPosts] = useState([]);
	const [headerTags, setHeaderTags] = useState(defaultTags);
	const [sidebarTags, setSidebarTags] = useState(defaultTags);
	const [filterText, setFilterText] = useState("");
	const [headerTagsShowing, setHeaderTagsShowing] = useState(false);
	const toggleHeaderTags = () => setHeaderTagsShowing(!headerTagsShowing);
	const [addPostShowing, setAddPostShowing] = useState(false);
	const toggleAddPost = () => setAddPostShowing(!addPostShowing);
	const [newPost, setNewPost] = useState({
		title: "",
		author: "",
		thumbnail: "https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
		summary: "",
		date_posted: "2022-10-20T23:00:00.000Z",
		url: "",
		tags: [],
	});

	function filterTextHandler(e) {
		setFilterText(e.target.value);
	}
	function headerHandler(e) {
		const tag = e.target.dataset.id;
		setHeaderTags({ ...headerTags, [tag]: !headerTags[tag] });
	}
	function sideHandler(e) {
		const tag = e.target.dataset.id;
		setSidebarTags({ ...sidebarTags, [tag]: !sidebarTags[tag] });
	}
	function handleChange(e) {
		setNewPost({ ...newPost, [e.target.id]: e.target.value });
	}

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

	const submitPost = async (e) => {
		e.preventDefault();
		const result = Object.entries(sidebarTags)
			.filter((item) => {
				return item[1] === true;
			})
			.map((item) => item[0]);

		const newObj = { ...newPost };
		newObj.tags = result;

		console.log(newObj, result);

		const response = await fetch("http://localhost:3005/api/posts", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newObj),
		});
		console.log(response.json());
	};

	return (
		<div className={addPostShowing ? "App" : "App hideNewPost"}>
			<AddPost handleChange={handleChange} submitPost={submitPost} setNewPost={setNewPost} checked={sidebarTags} changeFunction={sideHandler} newPost={newPost} />
			<div>
				<Header
					filterTextHandler={filterTextHandler}
					changeFunction={headerHandler}
					checked={headerTags}
					headerTagsShowing={headerTagsShowing}
					toggleHeaderTags={toggleHeaderTags}
					toggleAddPost={toggleAddPost}
				/>
				<PostsList filterText={filterText} posts={posts} />
			</div>
		</div>
	);
}
export default App;
