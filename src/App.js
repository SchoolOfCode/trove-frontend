import './App.css';
import AddPost from './components/AddPost/AddPost';
import Header from './components/Header/Header';
import PostsList from './components/PostsList/PostsList';

function App() {
  return (
    <div className="App">
      <AddPost />
      <Header />
      <PostsList />
    </div>
  );
}

export default App;
