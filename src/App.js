import "./App.css";
import { useReducer, useState } from "react";
import AddPost from "./components/AddPost/AddPost";
import Header from "./components/Header/Header";
import PostsList from "./components/PostsList/PostsList";
import { defaultTags } from "./data/defaultTags";
import usePostsFetcher from "./hooks/usePostsFetcher";
import CreateAndPost from "./utils/CreateAndPost";


const initialState = true;

function reducer({ headerTagsShowing, addPostShowing }, action) {
	console.log('fired reducer')
  switch (action.type) {
    case 'header':
      return !headerTagsShowing;
    case 'sidebar':
      return !addPostShowing;
    default:
      throw new Error();
  }
}


function App() {

	
	//States
	const [headerTags, setHeaderTags] = useState(defaultTags);
	const [sidebarTags, setSidebarTags] = useState(defaultTags);
	const [filterText, setFilterText] = useState("");
	const [newPost, setNewPost] = useState({
		title: "",
		author: "",
		thumbnail: "https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
		summary: "",
		date_posted: "2022-10-20T23:00:00.000Z",
		url: "",
		tags: [],
	});
	
	
	//! Hiding / Showing Stuff
	// const [headerTagsShowing, setHeaderTagsShowing] = useState(true);
	// const toggleHeaderTags = () => setHeaderTagsShowing(!headerTagsShowing);
	// const [addPostShowing, setAddPostShowing] = useState(true);
	// const toggleAddPost = () => setAddPostShowing(!addPostShowing);
	
	const [{ headerTagsShowing, addPostShowing }, dispatch] = useReducer(reducer, initialState)















	//Handler Functions
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

	//The JSX
	return (
		<div className={addPostShowing ? "App" : "App hideNewPost"}>
			<AddPost
				handleChange={handleChange}
				submitPost={(e) => CreateAndPost(e, sidebarTags, newPost)}
				setNewPost={setNewPost}
				checked={sidebarTags}
				changeFunction={sideHandler}
				newPost={newPost} />
			<div>
				<Header
					filterTextHandler={filterTextHandler}
					changeFunction={headerHandler}
					checked={headerTags}
					headerTagsShowing={headerTagsShowing}
					dispatch={dispatch}
				/>
				<PostsList
					filterText={filterText}
					posts={usePostsFetcher()} />
			</div>
		</div>
	);
}
export default App;
