import { useState } from "react";
import "./App.css";
import AddPost from "./components/AddPost/AddPost";
import Header from "./components/Header/Header";
import PostsList from "./components/PostsList/PostsList";

function App() {
  const [postTags, setPostTags] = useState([]);
  //! Not sure whether to start with empty array of tags or full array??
  const [filterTags, setFilterTags] = useState([]);
  const [toggleAddPost, setToggleAddPost] = useState(false);
  const [link, setLink] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [checked, setchecked] = useState({
    React: false,
    JavaScript: false,
    UX: false,
    UI: false,
    CSS: false,
    TypeScript: false,
    SuperTest: false,
    Jest: false,
    npm: false,
    Cypress: false,
    python: false,
    "Express JS": false,
    "Next JS": false,
  });
  const [sidebar, setsidebar] = useState({
    React: false,
    JavaScript: false,
    UX: false,
    UI: false,
    CSS: false,
    TypeScript: false,
    SuperTest: false,
    Jest: false,
    npm: false,
    Cypress: false,
    python: false,
    "Express JS": false,
    "Next JS": false,
  });

  function changeHandler(e) {
    const tag = e.target.dataset.id;
    // const obj = { [tag]:  };
    setchecked({ ...checked, [tag]: !checked[tag] });
  }
  function sideHandler(e) {
    const tag = e.target.dataset.id;
    // const obj = { [tag]:  };
    setsidebar({ ...sidebar, [tag]: !sidebar[tag] });
  }

  return (
    <div className="App">
      <Header changeFunction={sideHandler} checked={sidebar}/>
      <AddPost
        checked={checked}
        changeFunction={changeHandler}
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
