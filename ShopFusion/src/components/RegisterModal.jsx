import React from 'react'
import { signupSchema } from "../schema";
import {  Form, Field, Formik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/action";

const initialValues = {
  fullname: "",
  email: "",
  password: "",
  confirm_password: "",
};
// const handleSubmit = (values)=> {
//     // console.log('values', values)
//   }

export default function RegisterModal({open}) {
    
    const dispatch = useDispatch()
    const handleSubmit = (values, action)=>{
      dispatch(addUser(values))
      action.resetForm();
      open(false)
    }
  return (
    <div>
      <Formik 
            initialValues= {initialValues}
            validationSchema= {signupSchema}
            onSubmit={handleSubmit}>
              <Form>
              <div className="form my-3">
                <label>Full Name</label>
                <Field className="form-control" name='fullname' placeholder="Enter Your Name"/>
                <ErrorMessage className="text-danger" component='div' name='fullname'/>
              </div>
              <div className="form my-3">
                <label>Email address</label>
                <Field className="form-control" name='email' placeholder="name@example.com"/>
                <ErrorMessage className="text-danger" component='div' name='email' />
              </div>
              <div className="form my-3">
                <label>Password</label>
                <Field className="form-control" name='password' placeholder="Password"/>
                <ErrorMessage className="text-danger" component='div' name='password' />
              </div>
              <div className="form my-3">
                <label>Confirm Password</label>
                <Field className="form-control" name='confirm_password' placeholder="Password"/>
                <ErrorMessage className="text-danger" component='div' name='confirm_password'/>
              </div>
              {/* <div className="form my-3">
                <label>Profession</label>
                <Field className="form-control" name='profession' placeholder="Profession"/>
                <ErrorMessage className="text-danger" component='div' name='profession'/>
              </div>
              <div className="form my-3">
                <label>Gender</label>
                <Field style={{ marginLeft: "20px", marginRight: "20px" }} type="radio" name="male" value="Male" />
                <label htmlFor='male'>Male</label>
                <Field style={{ marginLeft: "20px", marginRight: "20px" }} type="radio" name="female" value="Female" />
                <label htmlFor='female'>Female</label>
                <Field style={{ marginLeft: "20px", marginRight: "20px" }} type="radio" name="other" value="Other" />
                <label htmlFor='other'>Other</label>
                
                <ErrorMessage className="text-danger" component='div' name='gender'/>
              </div>
              <div className="form my-3">
                <label>Hobby</label>
                <Field className="form-control" name='hobby' placeholder="Hobby"/>
                <ErrorMessage className="text-danger" component='div' name='hobby'/>
              </div>
              <div className="form my-3">
                <label>Description</label>
                <Field className="form-control" name='description' placeholder="Description"/>
                <ErrorMessage className="text-danger" component='div' name='description'/>
              </div> */}
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
    </div>
  )
}
