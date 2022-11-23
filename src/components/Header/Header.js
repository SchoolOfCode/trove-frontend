import React, { useState } from "react";
import TagList from "../TagList/TagList";
import tags from "../../data/tags";
import './Header.css'

export default function Header({ changeFunction ,checked}) {
  const [toggleTagList, setToggleTagList] = useState(false);

  return (
    <div className="header">
      <div class="header-input-container">
        <button className="add-post-btn">Add Post</button>
        <button className="catagories-btn">Catagories</button>
        <input className="search-bar" placeholder="Search:"></input>
      </div>
      <TagList changeFunction={changeFunction} checked={checked} tags={tags} />
    </div>
  );
}
