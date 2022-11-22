import React from "react";
import tags from '../../../data/tags'

export default function TagList() {
	return (
    <ul>
      {tags.map((tag, index) => {
        return <li index={index}>{tag}</li>
      })}

		</ul>
	);
}
