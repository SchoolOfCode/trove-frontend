import React from "react";
import Post from "./Post/Post.js";
import "./PostList.css";
import { v4 as uuidv4 } from "uuid";

export default function PostsList({ posts, filterText }) {
	return (
		<div>
			<ul className="post-list">
				{posts.map((post) => {
					if (post.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
						return "";
					}
					return <Post post={post} key={uuidv4()} />;
				})}
			</ul>
		</div>
	);
}
