import React from "react";
import "./RegisterStyle.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormInput from "../formInput/FormInput";

const RegisterForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("First Name is required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Emial is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required")
  });

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, values }) => (
        <div className="register_form_container">
          <Form className="register_form">
            <div className="form_field">
              <FormInput
                label="First Name"
                type="text"
                name="firstName"
                value={values.firstName}
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="error_message"
              />
            </div>
            <div className="form_field">
              <FormInput
                label="Last Name"
                type="text"
                name="lastName"
                value={values.lastName}
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="error_message"
              />
            </div>
            <div className="form_field">
              <FormInput
                label="Email"
                type="email"
                name="email"
                value={values.email}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error_message"
              />
            </div>
            <div className="form_field">
              <FormInput
                label="Password"
                type="password"
                name="password"
                value={values.password}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error_message"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="submit_button"
            >
              Submit
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default RegisterForm;
