import React from 'react';
import Post from './Post/Post.js';
import './PostList.css';
import { v4 as uuidv4 } from "uuid";


export default function PostsList({ posts }) {
  
// console.log(posts)

  return (
    <div>
      <ul className="post-list">
        {posts.map((post) => {
          
          return (
            <Post post={post} key={uuidv4()} />
          );
        })}
      </ul>
    </div>
  );
}


