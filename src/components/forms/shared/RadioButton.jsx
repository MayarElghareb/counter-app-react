

import React from "react";
import { Field } from "formik";
import FormikErrorMessage from "./FormikErrorMessage";

/**
 * FormikField Component
 */
const RadioButton= ({ name, type, label,options}) => {
  return (
    <Field name={name}>
      {(formikField) => {
        return (
          <>
            <label htmlFor={name} style={{ display: "block" }}>
              {label}
            </label>
            <input
              type={type}
            //   id={id}
              options={options}
              {...formikField.field}
              defaultChecked={formikField.field.value}
            />
            <FormikErrorMessage name={name} />
            {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
          </>
        );
      }}
    </Field>
  );
};

export default RadioButton;