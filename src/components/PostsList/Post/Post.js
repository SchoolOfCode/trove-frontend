import "../../../data/mock-posts.json"

export default function Post({id, author, title, img, summary, date_posted}) {
    return (
        <div>
            <h2>{title}</h2>
            <img src = {img} alt = "thumbnail"></img>
            <p>{summary}</p>
            <h3>{author}</h3>
            <h3>{date_posted}</h3>
            <button href = "{url}">Link</button>
        </div>
      
    )
}; 