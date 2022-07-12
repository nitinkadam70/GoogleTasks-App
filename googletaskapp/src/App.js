import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login';
import Homepage from './Pages/Homepage';
import Signup from './Pages/Signup';
import Profile from './Components/Profile';
import TaskpageFinal from './Pages/TaskpageFinal';

function App() {
  return (
    <>
      <Profile />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/task' element={<TaskpageFinal />} />
      </Routes>

    </>
  );
}

export default App;
