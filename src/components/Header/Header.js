import React, { useState } from "react";
import TagList from "../TagList/TagList";
import tags from "../../data/tags";
import './Header.css'

export default function Header({ filterTextHandler, changeFunction, checked}) {
  const [toggleTagList, setToggleTagList] = useState(false);
  


  return (
    <div className="header">
      <div className="header-input-container">
        <button className="add-post-btn">Add Post</button>
        <button className="catagories-btn">Catagories</button>
        <input onChange={filterTextHandler} className="search-bar" placeholder="Search:"></input>
      </div>
      <TagList changeFunction={changeFunction} checked={checked} tags={tags} />
    </div>
  );
}

