import React from 'react';
import TagList from '../TagList/TagList';

export default function Header() {
  return (
    <div>
      <button className="add-post-btn">Add Post</button>
      <button className="catagories-btn">Catagories</button>
      <input className="search=bar" placeholder="Search:"></input>
      <TagList />
    </div>
  );
}
