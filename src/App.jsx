import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import AddFoods from './pages/AddFoods/AddFoods'
import ListFoods from './pages/ListFoods/ListFoods'
import Sidebar from './Components/Sidebar/Sidebar'
import Menubar from './Components/Menubar/Menubar'
import Orders from './pages/Orders/Orders'
import { ToastContainer} from 'react-toastify';
  

function App() {  
  const [sidebarVisible,setSidebarVisible] = useState(true)

    const toggleSidebar = () =>{
      setSidebarVisible(!sidebarVisible);
    }

  return (
    <>
     
    <div className="d-flex" id="wrapper">
         
           <Sidebar sidebarVisible = {sidebarVisible}/>
           
            <div id="page-content-wrapper">
                
               <Menubar toggleSidebar={toggleSidebar  }/>
                <ToastContainer />
                
                <div className="container-fluid">
                   <Routes>
                    <Route path="/add" element ={<AddFoods />} />
                    <Route path="/list" element={<ListFoods />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path = "/" element={<ListFoods />} />

                   </Routes>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
