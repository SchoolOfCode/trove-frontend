import React from 'react';
import Post from './Post/Post.js';
import mockPosts from '../../data/mock-posts.json';
import './PostList.css';

export default function PostsList() {
  return (
    <div>
      <ul className="post-list">
        {mockPosts.map((post, index) => {
          return (
            <Post post={post} key={index} tags={['javascript', 'react']} />
          );
        })}
      </ul>
    </div>
  );
}
