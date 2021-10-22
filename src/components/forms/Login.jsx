import { useFormik } from "formik";
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
        <form onSubmit={formik.handleSubmit}>
          <div style={{ padding: 20 }}>
            <label htmlFor="email" style={{ display: "block" }}>
              email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            )}
    
            <label htmlFor="password" style={{ display: "block" }}>
              password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            )}
    
            <label htmlFor="rememberMe" style={{ display: "block" }}>
              remember me
            </label>
            <input
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              defaultChecked={formik.values.rememberMe}
            />
    
            <button style={{ display: "block" }} class="btn-primary m-auto">submit</button>
          </div>
          {/* <pre>{JSON.stringify(formik, null, 4)}</pre> */}
        </form>
      );
    };

export default LoginForm;