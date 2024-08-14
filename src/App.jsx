import {BrowserRouter,Route,Routes} from "react-router-dom";
import  "bootstrap/dist/css/bootstrap.min.css";
import  "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import ViewRecipe from "./Pages/ViewRecipe";
import Wishlist from "./Pages/Wishlist";
import NotFound from "./Pages/NotFound";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <div style={{marginBottom:"60px"}}><Navbar /></div>
     
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/viewrecipe" element={<ViewRecipe/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="/*" element={<NotFound/>}/>

        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
