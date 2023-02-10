import React from "react";
import "./RegisterStyle.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required")
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
      {({ isSubmitting }) => (
        <div className="register_form_container">
          <Form className="register_form">
            <div className="form_field">
              <Field
                className="input_field"
                type="text"
                name="firstName"
                placeholder="First Name"
              />
              <ErrorMessage name="firstName" component="div" />
            </div>
            <div className="form_field">
              <Field
                className="input_field"
                type="text"
                name="lastName"
                placeholder="Last Name"
              />
              <ErrorMessage name="lastName" component="div" />
            </div>
            <div className="form_field">
              <Field
                className="input_field"
                type="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage name="email" component="div" />
            </div>
            <div className="form_field">
              <Field
                className="input_field"
                type="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage name="password" component="div" />
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
