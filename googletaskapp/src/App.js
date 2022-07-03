import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login';
import Homepage from './Pages/Homepage';
import Signup from './Pages/Signup';
import Tasks from './Pages/Tasks';
import Profile from './Components/Profile';

function App() {
  return (
    <>
      <Profile />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/task' element={<Tasks />} />
      </Routes>

    </>
  );
}

export default App;
