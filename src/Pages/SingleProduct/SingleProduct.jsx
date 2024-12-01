import "./Product.scss";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect ,useState } from 'react';
import { useParams} from 'react-router-dom';
import { useRecoilState } from "recoil";
import { $baseURL } from "../../recoilstore/index";


export default function Product() {
  const { id } = useParams();
    const [baseUrl] = useRecoilState($baseURL);
    const documentId = id;
    const [MyProducts, setMyProducts] = useState({});
  useEffect(()=>{
     axios.get(`http://localhost:1337/api/products/:${documentId}`).then((res)=>{
    console.log(res.data);
    setMyProducts(res.data);
  })
  },[])
   
  return (
    <div className="Card">
<div className="cardImage" order="1">
<img src={`${baseUrl}`+ MyProducts.image[0].url} className="card-img-top" alt="..."/>
</div>
<div className="cardBody" order="2">
  <h2 className="card-title">{MyProducts.name}</h2>
  <h3 className="price">price : $ {MyProducts.price}</h3>
   <div className="button "> 
    <button className="added"> Buy Now</ button>
    <Link to="/CheckOut">
     <button className="check"> Check Your Order </ button></Link>
   </div>

</div>
</div>
  )
}


