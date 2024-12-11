
import "./SpecialOffers.scss";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useCart } from "../../Components/CartContext";
import { useRecoilState } from "recoil";
import { $baseURL } from "../../recoilstore/index";
import { Navigate } from "react-router-dom"
import ScrollToTopButton from "../../Components/ScrollButton/ScrollButton";


export default function SpecialOffers() {
  const [baseUrl] = useRecoilState($baseURL);
  const [Products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const{searchInput}=useRef();
  const [reults, setResults] = useState([]);


  useEffect(() => {
    axios.get(`${baseUrl}api/offers`,{
      params: {
        populate: "*",
      },
    }).then((res) => {
      setProducts(res.data.data);
      setResults(res.data.data);
      console.log(res.data.data);
      
    });
  }, []);

  return (
    <div className="col-12">
      <div className="hero-section">
        <img
          src="src/assets/offers.png"
          alt="Cosmetic products"
          className="hero-img"
        />
      </div>
      <div className="container  inputdiv">
              <input type="text" name="search" ref={searchInput} onChange={(event)=>{
                let val = event.target.value;
                let searchRes=Products.filter((el)=>{
                  return el.name.toLowerCase().includes(val.toLowerCase()) == true;
                })
                 console.log(searchRes);
                 setResults(searchRes);
                 
                 console.log(event.target.value)
                }} autoComplete="on" placeholder="   Search ....  " className=" d-none  d-lg-block input2"/>
              {/* <img   src="src/Components/NavBar/search-interface-symbol (1).png"  alt="Search" className=" d-none  d-lg-block  img2"/> */}
              
              <select className="select" style={{width:"8rem", height:"2rem", borderRadius:"5px"}  } onChange={(event)=>{
                let val = event.target.value;
                let searchRes=Products.filter((el)=>{
                  return el.name.toLowerCase().includes(val.toLowerCase()) == true;
                                })
                 console.log(searchRes);
                 setResults(searchRes);
              }}
              >
                <option value={-1} hidden>Choose Category</option>
                <option></option>
                <option value={"Eye"}>Eye</option>
                <option value={"Care"}>Care</option>
                <option value={"Serums"}>Serums</option>
              </select>
      </div>
      <div className="cards col-12 d-flex container flex-wrap g-4">
        {reults.map((el) => (
          <div key={el.documentId} className="card" style={{ width: "18rem" }}>
            <img src={`${baseUrl}`+ el.image[0].url} className="card-img-top" alt={el.category} />
            <div className="card-body">
              <h5 className="card-title">{el.name}</h5>
              <b className="card-text"><span className="Oldprice">price: {el.sale}  </span> - SALE: {el.sale} EGP</b>
              <div className="d-flex gap-3">
                <button  className="Show" onClick={() => addToCart(el) && Navigate("/Cart")}>
                  Add to Cart
                </button>
                <button  className="Show">
                  <a href={`SpecialOffers/${el.documentId}`}>Show Details</a>
                </button>
              </div>
            </div>
          </div>
        ))}
        <ScrollToTopButton />
      </div>
    </div>
  );
}


