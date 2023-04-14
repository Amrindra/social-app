import "./RegisterStyle.scss";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      dateOfBirth: Yup.date().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required")
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div className="register_form">
      <form onSubmit={formik.handleSubmit} className="register_form_container">
        <h3>User Registration</h3>

        <div className="register_name_field">
          <div className="form_input_items">
            <label htmlFor="firstName">
              First Name <span>*</span>
            </label>

            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              placeholder="first Name"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="error_message">{formik.errors.firstName}</div>
            ) : (
              <div className="error_alt">invisible</div>
            )}
          </div>
          <div className="form_input_items">
            <label htmlFor="lastName">
              Last Name <span>*</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="error_message">{formik.errors.lastName}</div>
            ) : (
              <div className="error_alt">invisible</div>
            )}
          </div>
        </div>

        <div className="form_input_items">
          <label htmlFor="dateOfBirth">
            Date of Birth <span>*</span>
          </label>
          <input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dateOfBirth}
          />
          {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
            <div className="error_message">{formik.errors.dateOfBirth}</div>
          ) : (
            <div className="error_alt">invisible</div>
          )}
        </div>

        <div className="form_input_items">
          <label htmlFor="email">
            Email <span>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error_message">{formik.errors.email}</div>
          ) : (
            <div className="error_alt">invisible</div>
          )}
        </div>

        <div className="form_input_items">
          <label htmlFor="password">
            Password <span>*</span>
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error_message">{formik.errors.password}</div>
          ) : (
            <div className="error_alt">invisible</div>
          )}
        </div>

        <div className="form_input_items">
          <label htmlFor="confirmPassword">
            Confirm Password <span>*</span>
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="error_message">{formik.errors.confirmPassword}</div>
          ) : (
            <div className="error_alt">invisible</div>
          )}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default RegistrationForm;
