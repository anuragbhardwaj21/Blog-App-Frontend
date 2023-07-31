import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Blogs from './components/Blogs';
import CreateBlog from './components/CreateBlog';
import UpdateBlog from './components/UpdateBlog';
import AuthRoute from './components/AuthRoute';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <AuthRoute path="/blogs" component={Blogs} />
        <AuthRoute path="/create" component={CreateBlog} />
        <AuthRoute path="/update/:id" component={UpdateBlog} />
      </Routes>
    </Router>
  );
};

export default App;
