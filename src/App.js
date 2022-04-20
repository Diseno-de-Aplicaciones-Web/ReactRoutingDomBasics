import './App.css';

import { Link, Route, Routes } from 'react-router-dom';

import Home from './views/Home';
import Shop from './views/Shop';
import News from './views/News';

function App() {

  return (
    <>

      <header>
        <h1>
          Mi web
        </h1>
        <nav>
          <Link to={"/"}><button>Home</button></Link>
          <Link to={"/shop/"}><button>Shop</button></Link>
          <Link to={"/news/"}><button>News</button></Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/news/" element={<News/>}>
          <Route path=":id" element={<News/>}/>
        </Route>
        <Route path="/shop/" element={<Shop/>}/>
      </Routes>

      <footer>
        <p>Legal</p>
      </footer>

    </>
  );
}

export default App;
