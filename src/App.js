
import { Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
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
import Footer from './Pages/Shared/Footer/Footer';
import SignUp from './Auth/SignUp/SignUP';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './Firebase/firebase.init';

function App() {


  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <p> loading... </p>
  }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/inventory' element={<Inventory />}></Route>
        <Route path='/manage_inventory' element={<ManageInventory />}></Route>
        <Route path='/my_items' element={<MyItems />}></Route>
        <Route path='/add_items' element={<AddItems />}></Route>
        <Route path='/single_items/:id' element={<SingleItems />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/about_me' element={<AboutMe />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
      <Footer />
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
