import "./LogIn.scss";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

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
          <Form className="form ">
            <p className="name">enter your email</p>
            <Field className="input" name="email" />
            <p>{errors.email && errors.email}</p>
            <p className="password">enter your password</p>
            <Field className="input" name="password" />

            <p>{errors.password && errors.password}</p>
            <b>
              {" "}
              dont have account?{" "}
              <button
                className="navigate"
                onClick={() => navigate("/register")}
              >
                {" "}
                click here
              </button>
            </b>
            <button className="sub " type="submit">
              LogIn
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
