import { useState } from 'react';
import './App.css';
import AddPost from './components/AddPost/AddPost';
import Header from './components/Header/Header';
import PostsList from './components/PostsList/PostsList';

function App() {

  const [postTags, setPostTags] = useState([]);
  //! Not sure whether to start with empty array of tags or full array??
  const [filterTags, setFilterTags] = useState([]);
  const [toggleAddPost, setToggleAddPost] = useState(false);
  const [link, setLink] = useState('');
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  

  return (
    <div className="App">
      <Header />
      <AddPost setTitle={setTitle} title={title} link={link} setLink={setLink} name={name} setName={setName} description={description} setDescription={setDescription} />
      <PostsList />
    </div>
  );
}

export default App;
