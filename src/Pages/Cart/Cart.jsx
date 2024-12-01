
// import { useCart } from "../../Components/CartContext";
// import "./Cart.scss";
// import { Link } from "react-router-dom";
// import { useRecoilState } from "recoil";
// import { $baseURL } from "../../recoilstore/index";

// export default function Cart() {
//   const { cartels, updateCount, removeFromCart, clearCart } = useCart();
// const [baseUrl] = useRecoilState($baseURL);

//   const totalels = cartels.reduce((total, el) => total + el.count, 0);
//   const totalPrice = cartels.reduce(
//     (total, el) => total + el.price * el.count,
//     0
//   );

//   return (
//     <div className="ShoppingCart mb-7">
//       <h1 className="text-center my-3 p-5">Shopping Cart</h1>
//       <div className="container">
//         {cartels.length === 0 ? (
//           <p className="text-center">No els in Cart</p>
//         ) : (
//           <>
//             <table className="table table-bordered">
//               <thead className="thead-dark">
//                 <tr>
//                   <th>#</th>
//                   <th>Img</th>
//                   <th>Title</th>
//                   <th>Price</th>
//                   <th>Count</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cartels.map((el , index) => (
//                   <tr key={el.id}>
//                     <td>{index + 1}</td>
//                     <td>
//                       <img src={`${baseUrl}`+ el.image[0].url} alt={el.title} width="50" />
//                     </td>
//                     <td>{el.title}</td>
//                     <td>${el.price}</td>
//                     <td>
//                       <button
//                         className="btn"
//                         onClick={() => updateCount(el.id, el.count + 1)}
//                       >
//                         +
//                       </button>
//                       <span>{el.count}</span>
//                       <button
//                         className="btn"
//                         onClick={() => updateCount(el.id, el.count - 1)}
//                       >
//                         -
//                       </button>
//                     </td>
//                     <td>
//                       <button
//                         className="btn btn-danger"
//                         onClick={() => removeFromCart(el.id)}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <div className="d-flex justify-content-between">
//             <div className="summary">
//               <h4>Total els:<span className="fs-4 text-black"> {totalels}</span></h4>
//               <h4>Total Price:<span className="fs-4 text-black"> ${totalPrice.toFixed(2)} </span></h4></div>
//              <div className="checkout"> 
//               <button className="btn btn-danger" onClick={clearCart}>
//                 Delete All 
//               </button>
//               <Link className="btn btn-primary" to="/CheckOut">Checkout</Link>
//               </div></div>
            
//           </>
//         )}
//       </div>
//     </div>
//   );
// }















import { useCart } from "../../Components/CartContext";
import "./Cart.scss";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { $baseURL } from "../../recoilstore/index";

export default function Cart() {
  const { cartels, updateCount, removeFromCart, clearCart } = useCart();
  const [baseUrl] = useRecoilState($baseURL);

  const totalels = Array.isArray(cartels) ? cartels.reduce((total, el) => total + el.count, 0) : 0;
  const totalPrice = Array.isArray(cartels)
    ? cartels.reduce((total, el) => total + el.price * el.count, 0)
    : 0;

  return (
    <div className="ShoppingCart mb-7">
      <h1 className="text-center my-3 p-5">Shopping Cart</h1>
      <div className="container">
        {cartels?.length === 0 ? (
          <p className="text-center">No items in Cart</p>
        ) : (
          <>
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>#</th>
                  <th>Img</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Count</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartels.map((el, index) => (
                  <tr key={el.id}>
                    <td>{index + 1}</td>
                    <td>
                      <img src={`${baseUrl}${el.image[0].url}`} alt={el.title} width="50" />
                    </td>
                    <td>{el.title}</td>
                    <td>${el.price}</td>
                    <td>
                      <button
                        className="btn"
                        onClick={() => updateCount(el.id, el.count + 1)}
                      >
                        +
                      </button>
                      <span>{el.count}</span>
                      <button
                        className="btn"
                        onClick={() => updateCount(el.id, el.count - 1)}
                      >
                        -
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => removeFromCart(el.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="d-flex justify-content-between">
              <div className="summary">
                <h4>
                  Total items:<span className="fs-4 text-black"> {totalels}</span>
                </h4>
                <h4>
                  Total Price:<span className="fs-4 text-black"> ${totalPrice.toFixed(2)} </span>
                </h4>
              </div>
              <div className="checkout">
                <button className="btn btn-danger" onClick={clearCart}>
                  Delete All
                </button>
                <Link className="btn btn-primary" to="/CheckOut">
                  Checkout
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
