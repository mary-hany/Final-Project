



import { useFormik } from "formik";
import * as Yup from "yup";
import { useCart } from "../../Components/CartContext";
import "./CheckOut.scss";

export default function CheckOut() {
  const { cartItems, clearCart } = useCart();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      address: Yup.string()
        .min(10, "Address must be at least 10 characters")
        .required("Address is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Order submitted:", { ...values, cartItems });
      alert("Order placed successfully!");
      clearCart();
      resetForm();
    },
  });

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  return (
    <div className="CheckOut container">
      <h1 className="text-center my-4">Checkout</h1>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty!</p>
      ) : (
        <div className="checkout-content d-flex gap-4">
          {/* Left Side - Order Summary */}
          <div className="order-summary col-md-6">
            <h4 className="mb-3"> Your Order </h4>
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.image} alt={item.title} width="50" />
                    </td>
                    <td>{item.title}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>{item.count}</td>
                    <td>${(item.price * item.count).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="4" className="text-end">
                    <strong>Total Price:</strong>
                  </td>
                  <td>
                    <strong>${totalPrice.toFixed(2)}</strong>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Checkout Form */}
          <div className="checkout-form col-md-6">
            <h4 className="mb-3">Shipping Details</h4>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className={`form-control ${
                    formik.touched.name && formik.errors.name
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="invalid-feedback">{formik.errors.name}</div>
                ) : null}
              </div>

              <div className="form-group mb-3">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className={`form-control ${
                    formik.touched.email && formik.errors.email
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="invalid-feedback">{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="form-group mb-3">
                <label htmlFor="address">Shipping Address</label>
                <textarea
                  id="address"
                  className={`form-control ${
                    formik.touched.address && formik.errors.address
                      ? "is-invalid"
                      : ""
                  }`}
                  rows="3"
                  {...formik.getFieldProps("address")}
                />
                {formik.touched.address && formik.errors.address ? (
                  <div className="invalid-feedback">{formik.errors.address}</div>
                ) : null}
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Place Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
