import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
import './ListFood.css';
import { getFoodsList, deleteFood } from '../../Services/foodService';

const ListFoods = () => {
  const [list,setList] = useState([]);

  //api call
   const fetchList = async () =>{
    try{
      const response = await getFoodsList();
       setList(response);
    }catch(error){
      toast.error('Error while reading the foods');
    }
   }


   useEffect(()=>{
      fetchList();
   },[])



   const removeItem = async (foodId)=> {
    console.log(foodId);
    try{
     const success = await deleteFood(foodId);
     if(success){
      toast.success('food removed.');
      await fetchList();
     }else{
      toast.error('Failed to delete')
     }
    }catch(error){
        toast.error('Error occurred while removing the food');
    }

      

   }
  return (
    <div className="py-5 row justify-center">
      <div className="col-11 card"  >

        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item,index) => {
              return (
                <tr key={index}>
                  <td>
                    <img src={item.imageUrl} alt="" height={48} width={48}></img>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>&#8377;{item.price}</td>
                  <td className='text-danger'> 
                    <i className="bi bi-x-circle-fill" onClick={()=> removeItem(item.id)}></i>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListFoods
