import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import axios from 'axios';
import { addFood } from '../../Services/foodService';
import { toast } from 'react-toastify';

const AddFoods = () => {

  const[image,setImage] = useState(null);
  const[data,setData] = useState({
    name:'',
    description:'',
    price:'',
    category: 'Biryani'
  });

  const onchangeHandler = (event) => {
    const name = event.target.name;
     const value = event.target.value;
    // if(name=='price'){
    //   value = Number(value);
    // }
   

    setData((data)=>({...data,[name]:value}));
  }
  
  //testing purpose

  // useEffect(()=>{
  //    console.log(data);
  // },[data]);


   const onSubmitHandler = async(event) => {
      event.preventDefault();
      if(!image){
        alert("Please select an image");
        return;

      }
            
      try{
         await addFood(data,image);
         toast.success('food added successfully');
         setData({name:'',description:'',price:'',category:'Biryani'});
         setImage(null);
      }catch(error){
          toast.error('something went wrong');
      }
       
   };

  return (
    <div>
      <div className="container">
    <h2 className="text-center">Add Food</h2>
   
    <div className="row" >
        <div className="card col-md-4 ">
            <form className="contact-form" onSubmit={onSubmitHandler}>
              <div className="mb-3 text-center">
                    <label htmlFor="image">
                      <img src= { image ? URL.createObjectURL(image): assets.upload} alt="" height={52} width={52} />
                    </label>
                    <input type="file" id="image" required hidden onChange={(e)=> setImage(e.target.files[0])}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" id="name" name="name" className="form-control mt-1" onChange={onchangeHandler} value={data.name} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" id="description" name="description" className="form-control mt-1" onChange={onchangeHandler} value={data.description} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                     <select name="category" id="category" className="form-control mt-1" onChange={onchangeHandler} value={data.category}>
                      <option value="Biryani">Biryani</option>
                       <option value="cake">Cake</option>
                       <option value="Pizza">Pizza</option>
                      <option value="Salad">Salad</option>
                      <option value="Ice-cream">Ice-cream</option>
                      <option value="Burger">Burger</option>
                      <option value="Chickenroll">ChickeRoll</option>
                      <option value="Momos">Momos</option>

                     </select>
                </div>

                <div className="mb-3">
                  <label htmlFor='price' className="form-label">Price</label>
                  <input type="number" id="price" name = "price" placeholder='$#8377;200'className="form-control mt-1" onChange={onchangeHandler} value={data.price} required/> 

                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    </div>
</div>
    </div>
  )
}

export default AddFoods
