import { useState } from 'react';
import './App.css';
import AddPost from './components/AddPost/AddPost';
import Header from './components/Header/Header';
import PostsList from './components/PostsList/PostsList';
import { defaultTags } from './data/defaultTags';

function App() {
  const [postTags, setPostTags] = useState([]);
  //! Not sure whether to start with empty array of tags or full array??
  const [filterTags, setFilterTags] = useState([]);
  const [toggleAddPost, setToggleAddPost] = useState(false);
  const [link, setLink] = useState('');
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [headerTags, setHeaderTags] = useState(defaultTags);
  const [sidebarTags, setSidebarTags] = useState(defaultTags);

  function headerHandler(e) {
    const tag = e.target.dataset.id;
    // const obj = { [tag]:  };
    setHeaderTags({ ...headerTags, [tag]: !headerTags[tag] });
  }

  function sideHandler(e) {
    const tag = e.target.dataset.id;
    // const obj = { [tag]:  };
    setSidebarTags({ ...sidebarTags, [tag]: !sidebarTags[tag] });
  }

  return (
    <div className="App">
      <Header changeFunction={sideHandler} checked={sidebarTags} />
      <AddPost
        checked={headerTags}
        changeFunction={headerHandler}
        setTitle={setTitle}
        title={title}
        link={link}
        setLink={setLink}
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
      />
      {/* <PostsList /> */}
    </div>
  );
}
export default App;
