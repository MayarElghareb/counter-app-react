import React from "react";
import { Field } from "formik";
import FormikErrorMessage from "./FormikErrorMessage";

/**
 * FormikField Component
 */
const RadioButton = ({ name, label, options, ...rest }) => {
  return (
    <div className="mt-2">
    <label >{label}</label>
    <div className="d-flex gap-4 mt-2 justify-content-center">

      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              //combination of inputs and label
              <div key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                ></input>
                <label htmlFor={option.value}>{option.key}</label>
              </div>
            );
          });
        }}
      </Field>
      <FormikErrorMessage name={name} />
    </div>
   </div>
  );
};

export default RadioButton;
