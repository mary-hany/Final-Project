// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// // Validation schema using Yup
// const validationSchema = Yup.object({
//   firstName: Yup.string()
//     .required('First Name is required'),
//   lastName: Yup.string()
//     .required('Last Name is required'),
//   email: Yup.string()
//     .email('Invalid email format')
//     .required('Email is required'),
//   password: Yup.string()
//     .min(8, 'Password must be at least 8 characters long')
//     .required('Password is required'),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref('password'), null], 'Passwords must match')
//     .required('Confirm Password is required'),
// });

// const RegistrationForm = () => {
//   return (
//     <Formik
//       initialValues={{
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//       }}
//       validationSchema={validationSchema}
//       onSubmit={(values) => {
//         // Handle form submission
//         console.log(values);
//       }}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//           <div>
//             <label htmlFor="firstName">First Name</label>
//             <Field name="firstName" type="text" />
//             <ErrorMessage name="firstName" component="div" className="error" />
//           </div>

//           <div>
//             <label htmlFor="lastName">Last Name</label>
//             <Field name="lastName" type="text" />
//             <ErrorMessage name="lastName" component="div" className="error" />
//           </div>

//           <div>
//             <label htmlFor="email">Email</label>
//             <Field name="email" type="email" />
//             <ErrorMessage name="email" component="div" className="error" />
//           </div>

//           <div>
//             <label htmlFor="password">Password</label>
//             <Field name="password" type="password" />
//             <ErrorMessage name="password" component="div" className="error" />
//           </div>

//           <div>
//             <label htmlFor="confirmPassword">Confirm Password</label>
//             <Field name="confirmPassword" type="password" />
//             <ErrorMessage name="confirmPassword" component="div" className="error" />
//           </div>

//           <button type="submit" disabled={isSubmitting}>
//             Register
//           </button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default RegistrationForm;
