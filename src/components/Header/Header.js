import TagList from "../TagList/TagList";
import tags from "../../data/tags";
import "./Header.css";

export default function Header({ changeFunction, checked, headerTagsShowing, dispatch }) {
	return (
		<div className="header">
			<div className="header-input-container">
				<button className="add-post-btn" onClick={() => dispatch({ type: "sidebar" })}>
					Add Post
				</button>
				<button className="catagories-btn" onClick={() => dispatch({ type: "header" })}>
					Catagories
				</button>
				<input
					onChange={(e) => {
						dispatch({ type: "searchbar", payload: e.target.value });
					}}
					className="search-bar"
					placeholder="Search:"
				></input>
			</div>
			{headerTagsShowing && <TagList changeFunction={changeFunction} checked={checked} tags={tags} />}
		</div>
	);
}
