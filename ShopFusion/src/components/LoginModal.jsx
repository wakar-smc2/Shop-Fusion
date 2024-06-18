import React, { useEffect } from "react";
import {  Form, Field, Formik, ErrorMessage } from "formik";
import { signinSchema } from "../schema";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentUser, delCurrentUser} from "../redux/action";
import { Navigate } from "react-router-dom";



const initialValues = {
  email: "",
  password: ""
};

export default function LoginModal({open}) {

const userdata = useSelector((state)=>state.handleSubmitForm)

  const dispatch = useDispatch()
  const handleSubmit = (values, action)=> {
    dispatch(addCurrentUser(values))
      action.resetForm();
      open(false);
  }
  const logOutUser = ()=>{
    dispatch(delCurrentUser())
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={signinSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form my-3">
                <label htmlFor="Name">Email address</label>
                <Field className="form-control" name='email' placeholder="name@example.com" readonly={true}/>
                <ErrorMessage className="text-danger" component='div' name='email' />
              </div>
              <div className="form my-3">
                <label htmlFor="Name">Password</label>
                <Field className="form-control" name='password' placeholder="Password"/>
                <ErrorMessage className="text-danger" component='div' name='password' />
              </div>
          {/* <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div> */}
          <div className="text-center">
            <button className="my-2 mx-auto btn btn-dark" type="submit">
              Login
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}

