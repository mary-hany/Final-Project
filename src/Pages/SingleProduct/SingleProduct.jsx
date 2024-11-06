
import axios from 'axios';
import { useEffect ,useState } from 'react';
import { useParams} from 'react-router-dom';

export default function Product() {
  const params = useParams();
  const [MyProducts , setMyProducts] = useState({});
  useEffect(()=>{
     axios.get(`https://fakestoreapi.com/products/${params.id}`).then((res)=>{
    console.log(res.data);
    setMyProducts(res.data);
  })
  },[])
 
  // console.log(params);
  
  return (
    <div className="card">
          <div className="card" style={{width: "18rem"}}>
  <img src={MyProducts.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{MyProducts.category}</h5>
    <p className="card-text">price : {MyProducts.price}.</p>
    <a href={`MakeUp/${MyProducts.id}`} className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
  )
}
