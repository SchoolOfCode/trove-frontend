import React from "react";
import Form from "./Form/Form";
import "./AddPost.css";

export default function AddPost({ title, setTitle, name, setName, link, setLink, description, setDescription }) {
	return (
		<div className="add-post-container">
			<h2 className="form-title">Add Post</h2>
			<Form className="form" setTitle={setTitle} title={title} link={link} setLink={setLink} name={name} setName={setName} description={description} setDescription={setDescription}  />
		</div>
	);
}
