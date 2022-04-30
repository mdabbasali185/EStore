
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Inventory from './Pages/Inventory/Inventory';
import AboutMe from './Pages/AboutMe/AboutMe';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import MyItems from './Pages/MyItems/MyItems';
import AddItems from './Pages/AddItems/AddItems';
import SingleItems from './Pages/SingleItems/SingleItems';
import LogIn from './Auth/LogIn/LogIn';
import SignIn from './Auth/SignIn/SignIn';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
       <Route path='/' element={<Home />}></Route>
       <Route path='/inventory' element={<Inventory />}></Route>
       <Route path='/manage_inventory' element={<ManageInventory />}></Route>
       <Route path='/my_items' element={<MyItems />}></Route>
       <Route path='/add_items' element={<AddItems />}></Route>
       <Route path='/single_items' element={<SingleItems />}></Route>
       <Route path='/blogs' element={<Blogs />}></Route>
       <Route path='/about_me' element={<AboutMe />}></Route>
       <Route path='/login' element={<LogIn />}></Route>
       <Route path='/sign_in' element={<SignIn />}></Route>
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
