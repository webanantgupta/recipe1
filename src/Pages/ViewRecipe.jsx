import React from 'react'
import {  Link, useLocation } from 'react-router-dom'

const ViewRecipe = () => {
let arr = JSON.parse(localStorage.getItem('favitem')) || [];
let location = useLocation();
console.log(location.state.recipe);
let data = location.state.recipe;

const handleWishList = () => {
  console.log("get");
  console.log(data); 
  arr.push(data);
  console.log(arr);
  
  localStorage.setItem('favitem',JSON.stringify(arr));
  
}

  return (
    <div>
      <div className="card mb-3 mt-5 " style={{ maxWidth: 540 }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={data.image} className="img-fluid rounded-start m-2" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body m-2">
        <h5 className="card-title">{data.label}</h5>
        <h5 className="card-title">{data.mealType}</h5>
        <Link to={data.url} className='btn btn-success'>How to make</Link>
        <Link className='btn btn-info' path='/wishlist'  onClick={handleWishList}>Add to Wishlist</Link>
        {/* <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p> */}
        {/* <p className="card-text">
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </p> */}
        <div className='row'>
           <div className='col-sm-3 text-center p-2 border border-secondary mx-1 my-1'>
                <h6 className=''>{data.totalNutrients.CA.label}</h6>
                <span className=''>{Math.ceil(data.totalNutrients.CA.quantity)}</span>
                <span className=''>{data.totalNutrients.CA.unit}</span>
           </div>
           <div className='col-sm-3 text-center p-2 border border-secondary mx-1 my-1'>
                <h6 className=''>{data.totalNutrients.FAT.label}</h6>
                <span className=''>{Math.ceil(data.totalNutrients.FAT.quantity)}</span>
                <span className=''>{data.totalNutrients.FAT.unit}</span>
           </div>
           <div className='col-sm-3 text-center p-2 border border-secondary mx-1 my-1'>
                <h6 className=''>{data.totalNutrients.SUGAR.label}</h6>
                <span className=''>{Math.ceil(data.totalNutrients.SUGAR.quantity)}</span>
                <span className=''>{data.totalNutrients.SUGAR.unit}</span>  
           </div>
           <div className='col-sm-3 text-center p-2 border border-secondary mx-1 my-1'>
                <h6 className=''>{data.totalNutrients.VITB12.label}</h6>
                <span className=''>{Math.ceil(data.totalNutrients.VITB12.quantity)}</span>
                <span className=''>{data.totalNutrients.VITB12.unit}</span>   
           </div>
           <div className='col-sm-3 text-center p-2 border border-secondary mx-1 my-1'>
                <h6 className=''>{data.totalNutrients.PROCNT.label}</h6>
                <span className=''>{Math.ceil(data.totalNutrients.PROCNT.quantity)}</span>
                <span className=''>{data.totalNutrients.PROCNT.unit}</span>   
           </div>
           <div className='col-sm-3 text-center p-2 border border-secondary mx-1 my-1'>
                <h6 className=''>{data.totalNutrients.ENERC_KCAL.label}</h6>
                <span className=''>{Math.ceil(data.totalNutrients.ENERC_KCAL.quantity)}</span>
                <span className=''>{data.totalNutrients.ENERC_KCAL.unit}</span>    
           </div>
        </div>
        
      </div>
    </div>
         <div>
          <h6 className='m-2'>Ingredients</h6>
          <ul>
             <li>{data.ingredientLines[0]}</li>
             <li>{data.ingredientLines[1]}</li>
             <li>{data.ingredientLines[2]}</li>
          </ul>
         </div>
  </div>
</div>


    </div>
  )
}

export default ViewRecipe