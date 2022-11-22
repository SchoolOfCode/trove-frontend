import "../../../data/mock-posts.json";
import TagList from "../../TagList/TagList";

export default function Post({ post }) {
	return (
		<div>
			<h2>{post.title}</h2>
			<img src={post.thumbnail} alt="thumbnail"></img>
			<p>{post.summary}</p>
			<h3>{post.author}</h3>
			<h3>{post.date_posted}</h3>
			<TagList />
			<a href={post.url}>Link</a>
		</div>
	);
}
