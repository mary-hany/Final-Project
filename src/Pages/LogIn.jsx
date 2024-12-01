import "./LogIn.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import axios from "axios";

export default function LogIn() {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required!"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required!"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post("http://localhost:1337/api/app-users", {
        identifier: values.email,
        password: values.password,
      });
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Login error:", error);
      setErrors({ server: "Login failed. Please check your credentials." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
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
                  <h1>LogIn</h1>
                  
                    <p className="name">Enter Your Email</p>
                    <Field className="input" name="email" type="text" />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error"
                    />
                 
                    <p className="name">  Enter Your Password</p>
                    <Field
                      className="input"
                      name="password"
                      type="password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="error"
                    />
                 
                  <b>
                    dont have account?{" "}
                    <Link className="navigate" to="/register">
                      Sign Up
                    </Link>
                  </b>
                  <button className="sub" type="submit" disabled={isSubmitting}>
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
