import React from "react";
import TagList from "../../TagList/TagList";
import tags from "../../../data/tags";
import "./Form.css";

export default function Form({ changeFunction, checked, submitPost, handleChange }) {
	return (
		<form>
			<input id="author" onChange={handleChange} placeholder="Name:" className="text-input"></input>
			<input id="title" onChange={handleChange} placeholder="Title:" className="text-input"></input>
			<input id="url" onChange={handleChange} placeholder="Link:" className="text-input"></input>
			<textarea id="summary" onChange={handleChange} placeholder="Descrition:" className="text-input" />
			<TagList changeFunction={changeFunction} tags={tags} checked={checked} />
			<button onClick={submitPost} className="add-post-button">
				Add new post
			</button>
		</form>
	);
}
