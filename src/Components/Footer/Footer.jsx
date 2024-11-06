import "./Footer.scss";


// export default function Footer() {
//   return (
//     <div className="footer">
//       <div className="col-12">
//         <h1>Footer</h1>

//       </div>
//     </div>
//   )
// }


import { useRef } from "react";
// import "./footer.scss";
import { FaEnvelope,FaTwitter,FaYoutube,FaLinkedin,FaFacebook, FaCopyright } from 'react-icons/fa';
export default function Footer() {
  
    const  userEmail = useRef();

    return (    
      <div>
      <div className="col-12">
      <div className=" footer col-12  d-flex">
        <div className=" div1  col-lg-6 col-md-12 col-12 d-flex ">
          <ul id="l1">
            <h3 id="h1">About</h3>
            <li>home</li>
            <li>shop</li>
            <li>our story</li>
            <li>Blogs</li>

            {/* <label for="cars">Choose a car:</label> */}
            
          </ul>

          <ul id="l2">
            <h3>Help</h3>
            <li>Shipping&Returns</li>
            <li>Track Order</li>
            <li>FAQs</li>
          </ul>
          <ul id="l3">
            <h3>Contact</h3>
            <li>phone:</li>
            {/* <li typeof="phone">(+1) 12314567893</li> */}
            <li>Email:</li>
            <li>
              <a href="#">Cosmetics22@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="div2   col-lg-6 col-md-12 col-12 ">
          <h1>Recieve new promotions</h1>
          <p>Hello get our latest products of all times any where you want </p>

          <div className="div3 ">
          <p id="p1" ><FaEnvelope className=" fa-light "></FaEnvelope></p>
          <input type="email"  placeholder="        inputyour email"  id="input1"  ref={userEmail} />
          <button type="submit" className="btn btn-light b1" >Subscribe</button>
          </div>
          <div className="fofa">
          <a href="#"> <FaTwitter  className="c1" />  </a> 
          <a href="#"><FaFacebook className="c2" ></FaFacebook></a>
          <a href="#"><FaLinkedin className="c3" ></FaLinkedin></a>
          <a href="#"><FaYoutube className="c4" ></FaYoutube></a>
          </div>
            <ul className="list">
            <li><a href="gmail"><FaCopyright/> 2022Brand,Inc </a></li>
            <li><a href="gmail">. privacy</a></li>
            <li><a href="gmail">. terms</a></li>
            <li><a href="gmail">. Sitemap</a></li>
            </ul>
        </div>
      </div>
    </div>
    </div>  
  );
}

