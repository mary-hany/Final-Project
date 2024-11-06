
import "./MakeUp.scss";

import axios from "axios";
import { useState } from "react";
// import { Link } from "react-router-dom";



export default function MakeUp() {
  const [Products , setProducts] = useState([]);
  axios.get("https://fakestoreapi.com/products").then((res)=>{
    setProducts(res.data);
    // console.log(res.data)
  })
  return (
    <div className="col-12 ">
    <div className="hero-section ">
      <img  src="src/assets/makeup.jpg" alt=" " />
      </div>
      <div className="col-12 d-flex container flex-wrap g-4">
        {
        Products.map((el , index)=>{

          return(
          <div key={index} className="card">
          <div className="card" style={{width: "18rem"}}>
  <img src={el.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{el.category}</h5>
    <p className="card-text">price : {el.price}.</p>
    {/* <Link to={`MakeUp/${el.id} `}  className="btn btn-primary"  > SHOW</Link> */}
     <button className="ShoW"><a href={`MakeUp/${el.id}`} > Show Details</a></button>
  </div>
</div>
</div>
)
        })}

      </div>
    </div>
  );
}
