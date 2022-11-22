import React from 'react';
import TagList from './TagList/TagList.js';

export default function Header() {
  return (
    <div>
      <button>Add Post</button>
      <button>Catagories</button>
      <input placeholder="Search:"></input>
      {/* <TagList /> */}
    </div>
  );
}
