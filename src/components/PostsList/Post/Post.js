import '../../../data/mock-posts.json';
import TagList from '../../TagList/TagList';

export default function Post({ post }) {
  return (
    <div>
      <h2 className="post-title">{post.title}</h2>
      <img className="post-img" src={post.thumbnail} alt="thumbnail"></img>
      <p className="post-summary">{post.summary}</p>
      <h3 className="post-author">{post.author}</h3>
      <h3 className="post-date">{post.date_posted}</h3>
      <TagList className="post-tag-list" />
      <a className="post-url" href={post.url}>
        Link
      </a>
    </div>
  );
}
