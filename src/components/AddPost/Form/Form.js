import React from "react";
import TagList from "../../TagList/TagList";
import tags from "../../../data/tags";
import './Form.css'

export default function Form({
  setTitle,
  setName,
  setLink,
  setDescription,
  changeFunction,
  checked
}) {
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
    <form>
      <input
        id="input-name"
        onChange={handleChange}
        placeholder="Name:"
        className="text-input"
      ></input>
      <input
        id="input-title"
        onChange={handleChange}
        placeholder="Title:"
        className="text-input"
      ></input>
      <input
        id="input-link"
        onChange={handleChange}
        placeholder="Link:"
        className="text-input"
      ></input>
      <textarea
        id="description"
        onChange={handleChange}
        placeholder="Descrition:"
        className="text-input"
      />
      <TagList changeFunction={changeFunction} tags={tags} checked={checked}/>
      <button className="add-post-button">Add new post</button>
    </form>
  );
}
