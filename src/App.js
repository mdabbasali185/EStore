
import { Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Inventory from './Pages/Inventory/Inventory';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import MyItems from './Pages/MyItems/MyItems';
import AddItems from './Pages/AddItems/AddItems';
import SingleItems from './Pages/SingleItems/SingleItems';
import LogIn from './Auth/LogIn/LogIn';
import Footer from './Pages/Shared/Footer/Footer';
import SignUp from './Auth/SignUp/SignUP';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './Firebase/firebase.init';
import RequireAuth from "./Auth/RequireAuth/RequireAuth"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App() {


  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <div className='text-center d-flex align-items-center text-danger justify-content-center' style={{ height: '100vh' }}> <FontAwesomeIcon icon={faSpinner} className='fa-pulse fa-10x'></FontAwesomeIcon> </div>
  }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/inventory' element={<RequireAuth><Inventory /></RequireAuth>}></Route>
        <Route path='/manage_inventory' element={<RequireAuth><ManageInventory />
        </RequireAuth>}></Route>
        <Route path='/my_items' element={<RequireAuth><MyItems /></RequireAuth>}></Route>
        <Route path='/add_items' element={
          <RequireAuth><AddItems /></RequireAuth>
        }></Route>
        <Route path='/single_items/:id' element={<RequireAuth>
          <SingleItems />
        </RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
      <Footer />
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
