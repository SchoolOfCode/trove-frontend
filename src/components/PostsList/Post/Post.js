import "./Post.css";
import { format } from "date-fns";

export default function Post({ post }) {
	return (
		<div className="post">
			<img className="post-img" src={post.thumbnail} alt="thumbnail"></img>
			<div class="info">
				<h2 className="post-title">{post.title}</h2>
				<p className="post-summary">{post.summary}</p>
				<h3 className="post-author">{post.author}</h3>
				<h3 className="post-date">{format(new Date(post.date_posted), "dd/MM/yyyy")}</h3>
			</div>
			<div class="tagsnlink">
				<ul className="tags">
					{post.tags.map((tag, index) => {
						return (
							<li className="tag" key={index}>
								{tag}
							</li>
						);
					})}
				</ul>
				<a className="post-url" href={post.url}>
					Link
				</a>
			</div>
		</div>
	);
}
