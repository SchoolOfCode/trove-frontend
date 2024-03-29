import { v4 as uuidv4 } from "uuid";
import "./TagList.css";

export default function TagList({ tags, changeFunction, checked }) {
	return (
		<div className="tag-list">
			{tags.map((tag) => {
				const randomid = uuidv4();
				return (
					<>
						<input data-id={tag} onChange={changeFunction} type="checkbox" key={randomid} checked={checked[tag]} id={randomid}></input>
						<label htmlFor={randomid}>{tag}</label>
					</>
				);
			})}
		</div>
	);
}
