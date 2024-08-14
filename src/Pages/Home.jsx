import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  const [items, setItems] = useState([])
  const [item, setitem] = useState("cake")
  let searchRef = useRef() 



  let getRecipe = async () => {
    //     let res = await fetch("https://api.edamam.com/search?q=chicken&app_id=e9098c0e&app_key=2e08c4b4f3976bb085cd3b73a6c9720e");
    //     let data = await res.json();
    //     console.log(data);

    // }

    // useEffect(() => {
    //   getRecipe()
    // }, []);



    let res = await axios.get(`https://api.edamam.com/search?q=${item}&app_id=e9098c0e&app_key=2e08c4b4f3976bb085cd3b73a6c9720e`);
    console.log(res.data.hits);
    setItems(res.data.hits);
  }
  const handleSearch = (e) => {
    e.preventDefault();
    let value = searchRef.current.value;
    // console.log(value);
    setitem(value);
    searchRef.current.value = ""
  }
  useEffect(() => {
    getRecipe()
  }, [item]);

  return (
    <div>
      <form className="d-flex col-6 m-auto my-3" role="search">
        <input ref={searchRef}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" onClick={handleSearch} type="submit">
          Search
        </button>
      </form>

      <div className='row  p-0 justify-content-center gap-5 mt-4'>

        {items.map((ele, index) => {
          return <div className="card" style={{ width: "18rem" }}>
            <img src={ele.recipe.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{ele.recipe.label}</h5>
              {/* <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p> */}
              <Link to="/viewrecipe" state={ele} className="btn btn-primary">
                View Recipe
              </Link>
            </div>
          </div>



        })}
      </div>
    </div>
  )

}
export default Home