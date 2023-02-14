import "./FormInputStyle.scss";
import { Field } from "formik";

const FormInput = ({ label, ...otherAttributeProps }) => {
  // console.log({ ...otherAttributeProps });
  return (
    <div className="group">
      <Field className="form-input" {...otherAttributeProps} />

      {label && (
        <label
          // if input field is empty don't show labels
          className={`${
            otherAttributeProps.value.length > 0 ||
            // equal underfined because the "otherAttributeProps.value.length" will give underfined
            otherAttributeProps.value.length === undefined
              ? "shrink"
              : null
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
