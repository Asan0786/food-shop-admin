import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = ({sidebarVisible}) => {
  return (
    <div>
       <div className={`border-end bg-white ${sidebarVisible ? `` : 'd-none'}`} id="sidebar-wrapper">
                <div className="sidebar-heading border-bottom bg-light"></div>
                <div className="list-group list-group-flush">
                  <img src={assets.delivery} alt="" height={62} width={62} /> 
                  
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/add">
                    <i className='bi bi-plus-circle me-2'></i>Add Food</Link>

                    <a className="list-group-item list-group-item-action list-group-item-light p-3" href="/list">
                    <i className='bi bi-list me-2'></i>List Foods</a>

                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/orders">
                    <i className='bi bi-cart me-2'></i>Orders</Link>
                   
                </div>
            </div>
    </div>
  )
}

export default Sidebar
