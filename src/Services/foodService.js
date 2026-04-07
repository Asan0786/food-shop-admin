import axios from "axios";
import { Toast } from "bootstrap";

const API_URL = 'http://localhost:8080/api/foods';

export const addFood = async (foodData, image) => {
      const formData = new FormData();
      formData.append('food',JSON.stringify(foodData));
      formData.append('file',image);
      
      try{
          await axios.post(API_URL,formData);
      }catch(error){
          alert('Error',error);
      }
}
export const getFoodsList = async() =>{
    try{
    const response = await axios.get(API_URL);
         //console.log(response.data);
           return response.data; 
        }catch(error){
            throw error;
        }
}

export const deleteFood = async (foodId)=> {
    try{
     const response = await axios.delete(API_URL +"/"+foodId);
            // fetchList(); // to show the remaining foods after deleting.
            return response.status === 204; 
             
     
    }catch(error){
      throw error;
    }

}