
import "./Home.scss";
import axios from "axios";
import AddToCartButton from '../../Components/Button-Added';

import { useEffect, useState } from "react";
export default function Home() {
  const [Product , setProduct] = useState([]);
  // const [homeProduct , setHomeProduct] = useState([]);
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((res)=>{
      const slicedProducts = res.data.slice(0, 3); 
      setProduct(slicedProducts);
      console.log(slicedProducts)
      
    })
    

  }, [])
  
  return (
    
    <div className="col-12 ">
      <div className="hero-section ">
        <video src="src/assets/myVideo.mp4" autoPlay muted loop alt="" style={{width: "100%"  , height: "80vh" , objectFit: "cover"}}></video>
       {/* <img  src="src/assets/hero_section.webp" alt=" " /> */}
       
      </div>
      <div className="container"> 
       <h1 className="text text-center">Our Products</h1>

       <div className="col-12 d-flex container flex-wrap g-4">
  {Product.map((el) => {
    return (
      <div key={el.id} className="HomeCards">
        <div className="card" style={{ width: "18rem" }}>
          <img src={el.image} className="card-img-top" alt={el.category} />
          <div className="card-body">
            <h5 className="card-title">{el.category}</h5>
            <p className="card-text">Price: ${el.price}</p>
            <div className="d-flex gap-3">
              <button className="Show">
                <a href={`MakeUp/${el.id}`}>Show Details</a>
              </button>
              <AddToCartButton product={Product} />
            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>



      </div>
    </div>  
    
    
  )
}
