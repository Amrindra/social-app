import React from "react";
import "./RegisterStyle.scss";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormInput from "../formInput/FormInput";

const RegisterForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    day: "",
    month: "",
    year: ""
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
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    day: Yup.number()
      .min(1, "Must be 1 to 31")
      .max(31, "Must 1 to 31")
      .required("Day is required"),
    month: Yup.number()
      .min(1, "Must be 1 to 12")
      .max(12, "Must be 1 to 12")
      .required("Month is required"),
    year: Yup.number()
      .min(2, "Must be 1 to 31")
      .max(3000, "Must 1 to 31")
      .required("Year is required")
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
              <div className="form_DOB_wrapper">
                <div className="form_date">
                  <FormInput
                    label="Day"
                    type="number"
                    name="day"
                    value={values.day}
                  />
                  <ErrorMessage
                    name="day"
                    component="div"
                    className="error_message"
                  />
                </div>
                <div className="form_date">
                  <FormInput
                    label="Month"
                    type="number"
                    name="month"
                    value={values.month}
                  />
                  <ErrorMessage
                    name="month"
                    component="div"
                    className="error_message"
                  />
                </div>

                <div className="form_date">
                  <FormInput
                    label="Year"
                    type="number"
                    name="year"
                    value={values.year}
                  />
                  <ErrorMessage
                    name="year"
                    component="div"
                    className="error_message"
                  />
                </div>
              </div>
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
