import React from "react";

export default function Form({tag}) {
	return (
		<form>
			<input></input>
			<input></input>
			<input></input>
      <textarea />
      <ul>
        <input type='checkbox'>{tag}</input>
      </ul>
      <button>submit</button>
		</form>
	);
}
