import React from 'react';
import tags from '../../data/tags';

export default function TagList() {
  return (
    <div className="tag-list">
      {tags.map((tag, index) => {
        return (
          <div>
            <label htmlFor={index}>{tag}</label>
            <input type="checkbox" key={index} id={index}></input>
          </div>
        );
      })}
    </div>
  );
}
