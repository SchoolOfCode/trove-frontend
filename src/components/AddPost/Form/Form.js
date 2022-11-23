import React from "react";
import TagList from "../../TagList/TagList";
import tags from "../../../data/tags";
import './Form.css'

export default function Form({
  title,
  setTitle,
  name,
  setName,
  link,
  setLink,
  description,
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
        className="input-name"
      ></input>
      <input
        id="input-title"
        onChange={handleChange}
        placeholder="Title:"
        className="input-title"
      ></input>
      <input
        id="input-link"
        onChange={handleChange}
        placeholder="Link:"
        className="input-link"
      ></input>
      <textarea
        id="description"
        onChange={handleChange}
        placeholder="Descrition:"
        className="description"
      />
      <TagList changeFunction={changeFunction} tags={tags} checked={checked}/>
      <button className="submit-button">Submit</button>
    </form>
  );
}
