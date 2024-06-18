import React from "react";
import { Link } from "react-router-dom";
import { signupSchema } from "../schema";
import {  Form, Field, Formik, useFormik, ErrorMessage } from "formik";

const initialValues = {
  fullname: "",
  email: "",
  password: "",
  confirm_password: "",
};

// const handleSubmit = (values)=> {
//   alert('values', values)
// }
const Register = () => {
  // const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
  //   useFormik({
  //     initialValues: initialValues,
  //     validationSchema: signupSchema,
  //     onSubmit: (values, action) => {
  //       let user = {
  //         fullname: values.fullname,
  //         email: values.email,
  //         password: values.password,
  //         confirm_password: values.confirm_password,
  //       };
  //       // setUsers([...users, user]);
  //       action.resetForm();
  //       console.log(values)
  //     },
  //   });
  const handleSubmit = (values)=> {
    // alert('values', values)
    console.log('values', values)
  }

  return (
    <>
      <div className="container my-3 py-3">
        <h1 className="text-center">Register</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <Formik 
            initialValues= {initialValues}
            validationSchema= {signupSchema}
            onSubmit={handleSubmit}>
              <Form>
              <div className="form my-3">
                <label htmlFor="Name">Full Name</label>
                <Field className="form-control" name='fullname' placeholder="Enter Your Name"/>
                <ErrorMessage className="text-danger" component='div' name='fullname'/>
              </div>
              <div className="form my-3">
                <label htmlFor="Name">Email address</label>
                <Field className="form-control" name='email' placeholder="name@example.com"/>
                <ErrorMessage className="text-danger" component='div' name='email' />
              </div>
              <div className="form my-3">
                <label htmlFor="Name">Password</label>
                <Field className="form-control" name='password' placeholder="Password"/>
                <ErrorMessage className="text-danger" component='div' name='password' />
              </div>
              <div className="form my-3">
                <label htmlFor="Name">Confirm Password</label>
                <Field className="form-control" name='confirm_password' placeholder="Password"/>
                <ErrorMessage className="text-danger" component='div' name='confirm_password'/>
              </div>
              <div className="my-3">
                <p>
                  Already has an account?{" "}
                  <Link
                    to="/login"
                    className="text-decoration-underline text-info"
                  >
                    Login
                  </Link>{" "}
                </p>
              </div>
              <div className="text-center">
                <button
                  className="my-2 mx-auto btn btn-dark"
                  type="submit"
                >
                  Register
                </button>
              </div>
              </Form>
            </Formik>
            {/* <form onSubmit={handleSubmit} method="POST">
              <div className="form my-3">
                <label htmlFor="Name">Full Name</label>
                <input
                  type="text"
                  name="fullname"
                  className="form-control"
                  id="Name"
                  placeholder="Enter Your Name"
                  value={values.fullname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.fullname && touched.fullname ? (
                  <p className="text-danger">{errors.fullname}</p>
                ) : null}
              </div>
              <div className="form my-3">
                <label htmlFor="Email">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="text-danger">{errors.email}</p>
                ) : null}
              </div>
              <div className="form  my-3">
                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="Password"
                  c
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p className="text-danger">{errors.password}</p>
                ) : null}
              </div>
              <div className="form  my-3">
                <label htmlFor="Password">Confirm Password</label>
                <input
                  type="password"
                  name="confirm_password"
                  className="form-control"
                  id="Password"
                  placeholder="Password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.confirm_password && touched.confirm_password ? (
                  <p className="text-danger">{errors.confirm_password}</p>
                ) : null}
              </div>
              <div className="my-3">
                <p>
                  Already has an account?{" "}
                  <Link
                    to="/login"
                    className="text-decoration-underline text-info"
                  >
                    Login
                  </Link>{" "}
                </p>
              </div>
              <div className="text-center">
                <button
                  className="my-2 mx-auto btn btn-dark"
                  type="submit"
                  disabled
                >
                  Register
                </button>
              </div>
            </form> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
