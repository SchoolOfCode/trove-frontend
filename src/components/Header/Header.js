import React, { useState } from "react";
import TagList from "../TagList/TagList";
import tags from "../../data/tags";

export default function Header({ changeFunction ,checked}) {
  const [toggleTagList, setToggleTagList] = useState(false);

  return (
    <div className="header">
      <button className="add-post-btn">Add Post</button>
      <button className="catagories-btn">Catagories</button>
      <input className="search=bar" placeholder="Search:"></input>
      <TagList changeFunction={changeFunction} checked={checked} tags={tags} />
    </div>
  );
}
