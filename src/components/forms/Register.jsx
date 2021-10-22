import React from "react";
import { Formik, Form, Field, ErrorMessage ,FieldArray} from "formik";
import * as yup from "yup";
import FormikField from "./shared/FormikField";

import RadioButton from "./shared/RadioButton";


/**
 * LoginFormikComponents Component
 */
const LoginFormikComponents = () => {
    const radioOtions=[{
        key:'select an option' , value :'',
        key:'option 1' , value:"male",
        key:'option 2', value:'female'
    }]
  const initialValues = {
    email: "",
    password: "",
    confirmPass:"",
    active:false,
    gender:"",
 
//   hobbies: [{}] 
  };
  const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email field is required"),
    password: yup.string().required("Password field is required"),
  confirmPass: yup.string().required("Enter a valid password")
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
     gender:yup.string().required("must select"),
    
        // gender: yup.boolean().required().oneOf([0 , 1], 'Selecting the gender field is required'),
    });
//         gender: yup.boolean().required().oneOf([0 , 1]),
  

//   });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit,values =>
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500)
      }
      validationSchema={validationSchema}
   
    >
      {(formik) => {
        return  (
            
          <Form>
         


         <div style={{ padding: 20 }}>
              <FormikField label="Email" name="email" type="email" />
              <FormikField label="Password" name="password" type="password" />
              <FormikField label="Confirm Password" name="confirmPass" type="password" />
              {/* <div id ="gender"> */}
           
              {/* <RadioButton value="male" name="ge" type="radio" id="0"/> */}
              {/* <RadioButton label="select" name="gender" type="radio"  options={radioOtions} /> */}
              <Field name="gender" as="select" >
                {(formikField) => {
                  return (
                    <>
                      <label htmlFor="gender" style={{ display: "block" }}>
                     gender
                      </label>
                      <select  type="dropdown"
                        id="gender"
                        defaultChecked={formikField.field.value}
                        {...formikField.field}>
                              <option  selected value=""> -- select an option -- </option>
                      <option value="male"   >Male</option>
   <option value="female">Female</option>
   </select>
   <ErrorMessage name="gender">
                        {(errMessage) => {
                          return (
                            <div style={{ color: "red" }}>{errMessage}</div>
                          );
                        }}
                      </ErrorMessage>
                      {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
                    </>
                  );
                }}
              </Field>
              {/* </div> */}
              <FormikField
                label="Active"
                name="rememberMe"
                type="checkbox"
              />

              <FieldArray
             name="hobbies"
             value=""
             render={arrayHelpers => (
               <div>
                 {formik.values.hobbies && formik.values.hobbies.length > 0 ? (
                   formik.values.hobbies.map((friend, index) => (
                     <div key={index}>
                       <Field name={`hobbies.${index}`} class="mt-1" />
                       <button
                         type="button" class="btn-danger m-auto mt-2" style={{display:"block"}}
                         onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                       >
                        remove hobby
                       </button>
                       <button
                         type="button" class="btn-primary m-auto mt-2" style={{display:"block"}}
                         onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                       >
                         add Hobby
                       </button>
                     </div>
                   ))
                 ) : (
                   <button type="button" onClick={() => arrayHelpers.push('')}>
                     {/* show this when user has removed all hobbies from the list */}
                     Add a hobby
                   </button>
                 )}

             
              <button class="btn-primary m-auto mt-5" style={{ display: "block" }}>submit</button>
           
            </div>
            )}
          />
            {/* <pre>{JSON.stringify(formik, null, 4)}</pre> */}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
export default LoginFormikComponents;