import React, {useEffect,useState } from 'react'

import axios from 'axios';

import {assets} from '../../assets/assets';



const Orders = () => {
  
    
    const [data,setData] = useState([]);

    const fetchOders = async () => {
       const response = await axios.get('http://localhost:8080/api/orders/all');
        console.log(response);
       //set the data
       setData(response.data);
      
    };

    //update function -> status update

     const orderStatusUpdate = async (event,orderId) => {
      const response = await axios.patch(`http://localhost:8080/api/orders/status/${orderId}?status=${event.target.value}`);

      if(response.status === 200){
        await fetchOders();
      }



     };

    useEffect(() => {
        
          fetchOders();
        
    },[]);


  return (
    <div>
        <div className="container">
          <div className="py-5 row justify-content-center">
             <div className="col-11-card">
                <table className = "table table-response">
                   <tbody>

                     {data.map((order,index) => {
                        return (
                          <tr key={index}>

                            <td>
                              <img src={assets.parcel} alt=""  height={48} width={48}></img>
                            </td>

                           <div>
                             <td>{order.orderedItems.map((item,itemIndex) => {
                              
                                if(itemIndex == order.orderedItems.length -1){ //it checks is it the last item in list
                                                                    
                                   return (item.name || "Unknown item") + " x " +item.quantity;
                                }else{
                                  return (item.name || "Unknown item") + "x" + item.quantity+ ",";
                                }
                              
                            })}
                            <div>{order.userAddress}</div>
                            </td>
                           </div>
                            <td>&#8377;{order.amount.toFixed(2)}</td>
                            <td>{order.orderedItems.length}</td>
                           
                            <td>
                              <select className='form-control' onChange={(event) => orderStatusUpdate(event,order.id)} value={order.orderStatus}>
                                <option value="Preparing">Preparing</option>
                                <option value="Out for delivery">Out for delivery</option>
                                <option value="Delivered">Delivered</option>
                              </select>
                            </td>
                          </tr>
                        )
                     })}
                   </tbody>
                </table>
             </div>

          </div>

        </div>
    </div>
  )
}

export default Orders

