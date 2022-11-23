import React from "react";
import TagList from "../../TagList/TagList";
import tags from "../../../data/tags";
import './Form.css'

export default function Form({ title, setTitle, name, setName, link, setLink, description, setDescription }) {
	function handleChange(e) {
		switch (e.target.id) {
			case "input-name":
				setName(e.target.value);
				break;
			case "input-title":
				setTitle(e.target.value);
				break;
			case "input-link":
				setLink(e.target.value);
				break;
			case "description":
				setDescription(e.target.value);
				break;
			default:
				break;
		}
	}

	return (
		<form className="form">
			<input id="text-input" onChange={handleChange} placeholder="Name:" className="text-input"></input>
			<input id="input-title" onChange={handleChange} placeholder="Title:" className="text-input"></input>
			<input id="input-link" onChange={handleChange} placeholder="Link:" className="text-input"></input>
			<textarea id="description" onChange={handleChange} placeholder="Descrition:" className="description" />
			<TagList tags={tags} />
			<button className="submit-button">Submit</button>
		</form>
	);
}
