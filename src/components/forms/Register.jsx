import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as yup from "yup";
import FormikField from "./shared/FormikField";

import RadioButton from "./shared/RadioButton";
import "./RegisterStyle.css";
/**
 * LoginFormikComponents Component
 */
const LoginFormikComponents = () => {
  const radioOptions = [
    { key: "Male", value: "male" },
    { key: "Female", value: "female" },
  ];
  const initialValues = {
    email: "",
    password: "",
    confirmPass: "",
    active: false,
    gender: "",

    //   hobbies: [{}]
  };
  const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email field is required"),
    password: yup.string().required("Password field is required"),
    confirmPass: yup
      .string()
      .required("Enter a valid password")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    gender: yup.string().required("must select"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={
        (onSubmit,
        (values) =>
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 500))
      }
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <div className="card h-auto m-auto w-50 mt-5 shadow p-3 mb-5 bg-white rounded">
          <Form>
            <h2 class="mt-2" >Register</h2>
            <div style={{ padding: 20 }}class="form">
              <FormikField label="Email" name="email" type="email" />
              <FormikField label="Password" name="password" type="password" />
              <FormikField
                label="Confirm Password"
                name="confirmPass"
                type="password"
              />
              <RadioButton
                control="radio"
                label="Select gender"
                name="gender"
                options={radioOptions}
              />

              <FormikField label="Active" name="rememberMe" type="checkbox" />

              <FieldArray
                name="hobbies"
                value=""
                render={(arrayHelpers) => (
                  <div>
                    {formik.values.hobbies &&
                    formik.values.hobbies.length > 0 ? (
                      formik.values.hobbies.map((hobby, index) => (
                        <div key={index}>
                          <Field name={`hobbies.${index}`} class="mt-1" />
                          <button
                            type="button"
                            class="btn-danger m-auto mt-2"
                            style={{ display: "block" }}
                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                          >
                            remove hobby
                          </button>
                          <button
                            type="button"
                            class="btn-primary m-auto mt-2"
                            style={{ display: "block" }}
                            onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                          >
                            add Hobby
                          </button>
                        </div>
                      ))
                    ) : (
                      <button
                        type="button" class="btn-primary"
                        onClick={() => arrayHelpers.push("")}
                      >
                        {/* show this when user has removed all hobbies from the list */}
                        Add a hobby
                      </button>
                    )}

                    <button
                      class="btn-success m-auto mt-5"
                      style={{ display: "block" }}
                    >
                      submit
                    </button>
                  </div>
                )}
              />
            </div>
          </Form>
          </div>
        );
      }}
    </Formik>
  );
};
export default LoginFormikComponents;
