import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TagList({tags}) {
  const [checked, setchecked] = useState({

  })
  
  function changeHandler(e) {
    // console.log(e.target.checked);
    // console.log(e.target.dataset.id);
    checked[e.target.dataset.id]=e.target.checked
    console.log(checked);
  }
  

  return (
    <div className="tag-list">
      {tags.map((tag) => {
        const randomid = uuidv4();
        return (
          <div>
            <label htmlFor={randomid}>{tag}</label>
            <input data-id={tag} onChange={changeHandler} type="checkbox" key={randomid} id={randomid} ></input>
          </div>
        );
      })}
    </div>
  );
}

