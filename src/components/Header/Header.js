import React, { useState } from "react";
import TagList from "../TagList/TagList";
import tags from "../../data/tags";
import "./Header.css";

export default function Header({ filterTextHandler, changeFunction, checked, headerTagsShowing, toggleHeaderTags, toggleAddPost }) {
	return (
		<div className="header">
			<div className="header-input-container">
				<button className="add-post-btn" onClick={toggleAddPost}>
					Add Post
				</button>
				<button className="catagories-btn" onClick={toggleHeaderTags}>
					Catagories
				</button>
				<input onChange={filterTextHandler} className="search-bar" placeholder="Search:"></input>
			</div>
			{headerTagsShowing && <TagList changeFunction={changeFunction} checked={checked} tags={tags} />}
		</div>
	);
}
