import "./LogIn.scss";

import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Register() {
  // const navigate = useNavigate();

  return (
    <div className="container">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmpassword: "",
        }}
        onSubmit={(values) => {
          console.log("Submitted values:", values);
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .required("Name is required!")
            .min(3, "Name must be at least 3 characters long"),
          email: Yup.string()
            .required("Email is required!")
            .email("Invalid email format"),
          password: Yup.string()
            .required("Password is required!")
            .min(8, "Password must be at least 8 characters long"),
          confirmpassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
        })}
      >
        {({ errors }) => (
          <div className="row">
             <div className="col-lg-6">
              <div className="image w-100 h-100">
                <img
                  src="src/assets/register.png"
                  alt="../assets/logo.jpg"
                  className="img w-100 h-100 "
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="register_form w-100 h-100">
                <Form className="form h-100">
                  <h1>Register</h1>
                  <p className="name">Enter Your Name</p>
                  <Field className="input" name="name" />
                  {errors.name && <p className="error">{errors.name}</p>}
                  <p className="name">Enter Your Email</p>
                  <Field className="input" name="email" type="email" />
                  {errors.email && <p className="error">{errors.email}</p>}
                  <p className="name">Enter Your Password</p>
                  <Field className="input" name="password" type="password" />
                  {errors.password && (
                    <p className="error">{errors.password}</p>
                  )}
                  <p className="name">  Confirm Your Password</p>
                  <Field
                    className="input"
                    name="confirmpassword"
                    type="password"
                  />
                  {errors.confirmpassword && (
                    <p className="error">{errors.confirmpassword}</p>
                  )}

                  <b> Already Have Account? <Link className="navigate" to="/login">Login</Link></b>
                   
                  <button className="sub" type="submit">
                    Submit
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
