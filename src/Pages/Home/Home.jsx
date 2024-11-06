
import "./Home.scss";
import axios from "axios";
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
      <img  src="src/assets/hero_section.webp" alt=" " />
      </div>
      <div className="container"> 
                <h1 className="text-center p-4">Our Products</h1>

      <div className="col-12 d-flex container flex-wrap g-4">
        {
        Product.map((el )=>{
          return(
          <div key={el.id} className="card">
          <div className="card" style={{width: "18rem"}}>
  <img src={el.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{el.category}</h5>
    <p className="card-text">price : {el.price}.</p>
    {/* <Link to={`MakeUp/${el.id} `}  className="btn btn-primary"  > SHOW</Link> */}
     {/* <button className="Show"><a href={`MakeUp/${el.id}`} > Show Details</a></button> */}
  </div>
</div>
</div>
)
        })}

      </div>


      </div>
    </div>  
    
    
  )
}
