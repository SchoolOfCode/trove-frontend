import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TagList({tags}) {
  return (
    <div className="tag-list">
      {tags.map((tag) => {
        const randomid = uuidv4();
        return (
          <div>
            <label htmlFor={randomid}>{tag}</label>
            <input type="checkbox" key={randomid} id={randomid}></input>
          </div>
        );
      })}
    </div>
  );
}

