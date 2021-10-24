import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

import * as yup from "yup";
const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    onSubmit: (values) => console.log(JSON.stringify(values, null, 4)),
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Please enter a valid email address")
        .required("Email field is required"),
      password: yup.string().required("Password field is required"),
    }),
  });
  return (
    <div class="card w-50 m-auto mt-5 shadow p-3 mb-5 bg-white rounded h-auto">
      <h2 className="color-black mt-2">Login</h2>
      <Form
        className="container m-auto pt-5 w-50"
        onSubmit={formik.handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Group>
        {formik.touched.email && formik.errors.email && (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        )}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Group>
        {formik.touched.password && formik.errors.password && (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        )}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Remember me</Form.Label>
          <Form.Check
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            defaultChecked={formik.values.rememberMe}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>

    // <form onSubmit={formik.handleSubmit}>
    //   <div style={{ padding: 20 }}>
    //     <label htmlFor="email" style={{ display: "block" }}>
    //       email
    //     </label>
    //     <input
    //       type="email"
    //       id="email"
    //       name="email"
    //       value={formik.values.email}
    //       onChange={formik.handleChange}
    //       onBlur={formik.handleBlur}
    //     />
    //     {formik.touched.email && formik.errors.email && (
    //       <div style={{ color: "red" }}>{formik.errors.email}</div>
    //     )}

    //     <label htmlFor="password" style={{ display: "block" }}>
    //       password
    //     </label>
    //     <input
    //       type="password"
    //       id="password"
    //       name="password"
    //       value={formik.values.password}
    //       onChange={formik.handleChange}
    //       onBlur={formik.handleBlur}
    //     />
    //     {formik.touched.password && formik.errors.password && (
    //       <div style={{ color: "red" }}>{formik.errors.password}</div>
    //     )}

    //     <label htmlFor="rememberMe" style={{ display: "block" }}>
    //       remember me
    //     </label>
    //     <input
    //       type="checkbox"
    //       name="rememberMe"
    //       id="rememberMe"
    //       onChange={formik.handleChange}
    //       onBlur={formik.handleBlur}
    //       defaultChecked={formik.values.rememberMe}
    //     />

    //     <button style={{ display: "block" }} class="btn-primary m-auto">
    //       submit
    //     </button>
    //   </div>
    //   {/* <pre>{JSON.stringify(formik, null, 4)}</pre> */}
    // </form>
  );
};

export default LoginForm;
