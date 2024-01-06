import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import Login from './components/login';
import SignUp from './components/signup';


function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
  <Route path='/' element={<Layout />}/>
  <Route path='/login' element={<Login />}/>
  <Route path='/signup' element={<SignUp />}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
