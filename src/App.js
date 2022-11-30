import "./App.css";
import { useReducer, useState } from "react";
import AddPost from "./components/AddPost/AddPost";
import Header from "./components/Header/Header";
import PostsList from "./components/PostsList/PostsList";
import { defaultTags } from "./data/defaultTags";
import usePostsFetcher from "./hooks/usePostsFetcher";
import CreateAndPost from "./utils/CreateAndPost";

const initialState = {
	addPostShowing: true,
	headerTagsShowing: true,
	filterText: '',
};

function reducer(state, action) {
	console.log('reducer fired');
	console.log(action.type);
	switch (action.type) {
		case "header":
			{return { ...state, headerTagsShowing: !state.headerTagsShowing}}
		case "sidebar":
			{return { ...state, addPostShowing: !state.addPostShowing}}
		case "searchbar":
			{return { ...state, filterText: action.payload}}
		default:
			throw new Error();
	}
}

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [headerTags, setHeaderTags] = useState(defaultTags);
	const [sidebarTags, setSidebarTags] = useState(defaultTags);
	const [newPost, setNewPost] = useState({
		title: "",
		author: "",
		thumbnail: "https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
		summary: "",
		date_posted: "2022-10-20T23:00:00.000Z",
		url: "",
		tags: [],
	});


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

	//The JSX
	return (
		<div className={state.addPostShowing ? "App" : "App hideNewPost"}>
			<AddPost handleChange={handleChange} submitPost={(e) => CreateAndPost(e, sidebarTags, newPost)} setNewPost={setNewPost} checked={sidebarTags} changeFunction={sideHandler} newPost={newPost} />
			<div>
				<Header changeFunction={headerHandler} checked={headerTags} headerTagsShowing={state.headerTagsShowing} dispatch={dispatch} />
				<PostsList filterText={state.filterText} posts={usePostsFetcher()} />
			</div>
		</div>
	);
}
export default App;
