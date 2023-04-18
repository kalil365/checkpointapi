import './App.css';
import UserList from './UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Profile from './Profile';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='/profile/:id' element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>);
}

export default App;
