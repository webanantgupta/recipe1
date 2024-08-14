import React from 'react'
import { useLocation } from 'react-router-dom'

const Wishlist = () => {
  let location = useLocation();
  console.log(location.state);

  let arr = JSON.parse(localStorage.getItem('favitem') || [])
  console.log(arr);
  
  
  return (
    <div>Wishlist</div>
  )
}

export default Wishlist