import "./LogIn.scss";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LogIn() {
  // const navigate = useNavigate();

  return (
    <div className="container">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string().email().required("Please enter a valid email"),
          password: Yup.string()
            .url()
            .required("Please enter a valid password"),
        })}
        onSubmit={(values) => console.log(values)}
      >
        {({ errors }) => (
          <div className="row">
             <div className="col-lg-6">
              <div className="image w-100 h-100">
                <img
                  src="src/assets/register.png"
                  alt="../assets/logo.jpg"
                  className="img w-100 h-100 object-fit-cover"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="register_form w-100 h-100">
                <Form className="form h-100">
                 <h1>Log In</h1>
                  <p className="name">enter your email</p>
                 <Field className="input" name="email" />
                  <p>{errors.email && errors.email}</p>
                 <p className="password">enter your password</p>
                 <Field className="input" name="password" />
                 <p>{errors.password && errors.password}</p>
                 <b>dont have account?<Link className="navigate" to="/register"> Sign Up</Link></b>    
                  <button className="sub " type="submit">
                    LogIn
                   </button>
                </Form>

              </div>
            </div>
           
          </div>
        )}
      </Formik>
    </div>
  );
}


                


