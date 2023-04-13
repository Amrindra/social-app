import "./RegisterStyle.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  dob: Yup.date().required("Date of birth is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required")
});

const RegisterForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="register_form">
          <div className="register_form_wrapper">
            <h3>User Registration</h3>

            <div className="register_name_field">
              <div className="form_input_items">
                <label htmlFor="firstName">First Name</label>
                <Field
                  className="input_field"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                />
                <ErrorMessage component="span" name="firstName" />
              </div>
              <div className="form_input_items">
                <label htmlFor="lastName">Last Name</label>
                <Field
                  className="input_field"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                />
                <ErrorMessage component="span" name="lastName" />
              </div>
            </div>

            <div className="form_input_items">
              <label htmlFor="dob">Date of Birth</label>
              <Field className="input_field" type="date" name="dob" />
              <ErrorMessage name="dob" component="span" />
            </div>

            <div className="form_input_items">
              <label htmlFor="email">Email</label>
              <Field
                className="input_field"
                type="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage component="span" name="email" />
            </div>
            <div className="form_input_items">
              <label htmlFor="password">Password</label>
              <Field
                className="input_field"
                type="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage component="span" name="password" />
            </div>

            <div className="form_input_items">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                className="input_field"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
              <ErrorMessage component="span" name="confirmPassword" />
            </div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
