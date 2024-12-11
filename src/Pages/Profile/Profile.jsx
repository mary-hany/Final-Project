import "./Profile.scss"
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const navigate = useNavigate();
   const userData = JSON.parse(localStorage.getItem("UserInfo"));
   console.log(userData);


  return (
    <div className="container col-12  profile col-lg-6">   
       <h1 className="text-center" >WELCOME {userData[0].username} To Your Account</h1>
       {/* <h2 className="text-center" >Your Address is : {userData.user_address}</h2> */}
       {/* <h2 className="text-center" >Your phone is: {userData.user_phone}</h2> */}
       {/* <h3>since you have logged in M&A Cosmetics Store TRY OUT OUR NEWEST COLLECTONS</h3> */}
       <button className='b1' onClick={()=>{navigate("/")}}>SHOP NOW</button>
    </div>
  )
}
