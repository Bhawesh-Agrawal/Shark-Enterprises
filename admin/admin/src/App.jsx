import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './Pages/Add/Add'
import List from './Pages/List/List'
import Order from './Pages/Order/Order'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {


  const url = "http://localhost:4000"

  return (
    <div>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <hr></hr>
      <div className="app-content">
        <Sidebar></Sidebar>
        <Routes>
          <Route path = "/add" element={<Add url={url}></Add>}></Route>
          <Route path = "/list" element={<List url = {url}></List>}></Route>
          <Route path = "/order" element={<Order url = {url}></Order>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
