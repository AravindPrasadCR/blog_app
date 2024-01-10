import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home';
import AddBlog from './Components/AddBlog';
import ViewBlog from './Components/ViewBlog';
import AllBlogs from './Pages/AllBlogs';
import Categories from './Pages/Categories';
import EditBlog from './Components/EditBlog';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import React from 'react';

function App() {

  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className='app'>
  
      <Header/>
      <ToastContainer position='top-center'
          theme='colored' autoClose={2000} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/viewblog/:id' element={<ViewBlog/>}/>
        <Route path='/allblogs' element={<AllBlogs/>}/>
        <Route path='/categories' element={<Categories/>}/>

        <Route path='/add' element={<AddBlog/>}/>

        <Route path='/edit/:id' element={<EditBlog/>}/>
          
      </Routes>
     
      <Footer/>
    
    </div>
  );
}

export default App;