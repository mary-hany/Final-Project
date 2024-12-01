import "./MakeUp.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCart } from "../../Components/CartContext";
import { useRecoilState } from "recoil";
import { $baseURL } from "../../recoilstore/index";
import { Navigate } from "react-router-dom";

export default function MakeUp() {
  const [baseUrl] = useRecoilState($baseURL);
  const [Products, setProducts] = useState([]);
  const { addToCart } = useCart();



  useEffect(() => {
    axios.get(`${baseUrl}/api/products`,{
      params: {
        populate: "*",
      },
    }).then((res) => {
      setProducts(res.data.data);
    });
  }, []);

  

  return (
    <div className="col-12 ">
      <div className="hero-section ">
        <img src="src/assets/makeup.jpg" alt=" " />
      </div>
      <div className="cards col-12 d-flex container flex-wrap g-4">
        {Products.map((el) => (
          <div key={el.documentId} className="card" style={{ width: "18rem" }}>
            <img src={`${baseUrl}`+ el.image[0].url} className="card-img-top" alt={el.category} />
            <div className="card-body">
              <h5 className="card-title">{el.name}</h5>
              <b className="card-text">Price: ${el.price}</b>
              <div className="d-flex gap-3">
                <button  className="Show" onClick={() => addToCart(el) && Navigate("/Cart")}>
                  

                  Add to Cart
                </button>
                <button  className="Show">
                  <a href={`MakeUp/${el.id}`}>Show Details</a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}














