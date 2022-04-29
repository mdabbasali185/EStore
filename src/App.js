
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
       <Route path='/' element={<Home />}></Route>
       <Route path='/' element={<Home />}></Route>
       <Route path='/' element={<Home />}></Route>
       <Route path='/blogs' element={<Blogs />}></Route>
       <Route path='/' element={<Home />}></Route>
     </Routes>
    </div>
  );
}

export default App;