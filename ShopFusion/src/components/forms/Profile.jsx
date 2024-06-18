import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControl from "./FormControl";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { updateCurrentUser } from "../../redux/action";

export default function Profile() {
  const [disable, setDisable] = useState(true);
  const userdata = useSelector((state) => state.handleSubmitForm) || {};
  const currentUser = userdata.currentUser || {};
  const dispatch = useDispatch()

  const profession = [
    { key: "Select an option", value: "" },
    { key: "Singer", value: "singer" },
    { key: "Dancer", value: "dancer" },
    { key: "Player", value: "player" },
  ];

  const gender = [
    { key: "male", value: "male" },
    { key: "female", value: "female" },
    { key: "other", value: "other" },
  ];
  const hobby = [
    { key: "Criket", value: "cricket" },
    { key: "Footbal", value: "footbal" },
    { key: "Tenis", value: "cOption3" },
  ];
  const initialValues = {
    fullname: currentUser.fullname || "",
    email: currentUser.email || "",
    password: currentUser.password || "",
    confirm_password: currentUser.password || "",
    description: "",
    profession: "",
    radioOption: "",
    hobby: [],
  };

  const validateSchema = Yup.object({
    password: Yup.string().required("Required"),
    confirm_password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    dispatch(updateCurrentUser(values))
  };

  if (userdata.currentUser !== null) {
    return (
      <div className="container my-3 py-3">
        <h1 className="text-center">Profile</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <Formik
              initialValues={initialValues}
              validationSchema={validateSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form>
                  <FormControl
                    control="input"
                    label="Full Name"
                    name="fullname"
                    disabled={true}
                  />
                  <FormControl
                    control="input"
                    type="email"
                    label="Email"
                    name="email"
                    disabled={true}
                  />
                  <FormControl
                    control="input"
                    type="password"
                    label="Password"
                    name="password"
                    disabled={disable}
                  />
                  <FormControl
                    control="input"
                    type="password"
                    label="Confirm Password"
                    name="confirm_password"
                    disabled={disable}
                  />

                  {/* <FormControl
                    control="select"
                    label="Profession"
                    name="profession"
                    options={profession}
                  />
                  <FormControl
                    control="radio"
                    label="Gender"
                    name="gender"
                    options={gender}
                  />
                  <FormControl
                    control="checkbox"
                    label="Hobby"
                    name="hobby"
                    options={hobby}
                  />
                  <FormControl
                    control="textarea"
                    label="Description"
                    name="description"
                  /> */}
                  <div className="text-center">
                    <button className="my-2 mx-3 btn btn-dark" type="submit">
                      Update
                    </button>
                    {/* <button
                      onClick={() => setDisable(false)}
                      className="my-2 mx-3 btn btn-dark"
                    >
                      Edit
                    </button> */}
                  </div>
                </Form>
              )}
            </Formik>
            <div className="text-center">
            <button
                      onClick={() => setDisable(false)}
                      className="my-2 mx-3 btn btn-dark"
                    >
                      Edit
                    </button>
                    </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/" />;
  }

  // return (
  //   <div className="container my-3 py-3">
  //     <h1 className="text-center">Register</h1>
  //     <hr />
  //     <div className="row my-4 h-100">
  //       <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
  //         <Formik
  //           initialValues={initialValues}
  //           validationSchema={validateSchema}
  //           onSubmit={onSubmit}
  //         >
  //           {(formik) => (
  //             <Form>
  //               <FormControl
  //                 control="input"
  //                 label="Full Name"
  //                 name="fullname"
  //                 disabled={true}
  //               />
  //               <FormControl
  //                 control="input"
  //                 type="email"
  //                 label="Email"
  //                 name="email"
  //                 disabled={true}
  //               />
  //               <FormControl
  //                 control="input"
  //                 type="password"
  //                 label="Password"
  //                 name="password"
  //               />
  //               <FormControl
  //                 control="input"
  //                 type="password"
  //                 label="Confirm Password"
  //                 name="confirm_password"
  //               />

  //               <FormControl
  //                 control="select"
  //                 label="Profession"
  //                 name="profession"
  //                 options={profession}
  //               />
  //               <FormControl
  //                 control="radio"
  //                 label="Gender"
  //                 name="gender"
  //                 options={gender}
  //               />
  //               <FormControl
  //                 control="checkbox"
  //                 label="Hobby"
  //                 name="hobby"
  //                 options={hobby}
  //               />
  //               <FormControl
  //                 control="textarea"
  //                 label="Description"
  //                 name="description"
  //               />
  //               <button type="submit">Submit</button>
  //             </Form>
  //           )}
  //         </Formik>
  //       </div>
  //     </div>
  //   </div>
  // );
}
