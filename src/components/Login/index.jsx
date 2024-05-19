import { Container } from "../Register/style";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Input, message } from "antd";
import useRequest from "../../hooks/useRequest";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth";

const Login = () => {
  const [, dispatch] = useContext(AuthContext);
  const navigate = useNavigate();
  const { request } = useRequest();

  const handleSubmit = async (values) => {
    try {
      const res = await request({
        url: "user/login",
        method: "post",
        body: values,
        includeToken: false,
      });

      if (res?.token) {
        message.success("Successfully Logged In!");
        dispatch({ type: "register", payload: res?.token });
        navigate("/");
      } else {
        message.error(res);
      }
    } catch (error) {
      console.error("Login error:", error);
      message.error("An error occurred while logging in. Please try again.");
    }
  };

  return (
    <Container>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          password: Yup.string()
            .min(3, "Password should be at least 3 characters long")
            .required("Password is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        })}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Container.Form onSubmit={formik.handleSubmit}>
            <Container.Title>Log In</Container.Title>
            <Container.Text>Welcome to Cambridge Online</Container.Text>

            <Input
              placeholder="Enter your email"
              autoComplete="current-email"
              {...formik.getFieldProps("email")}
              name="email"
            />
            <ErrorMessage name="email">
              {(msg) => <div className="error-msg">{msg}</div>}
            </ErrorMessage>

            <Input
              placeholder="Enter your password"
              type="password"
              autoComplete="current-password"
              {...formik.getFieldProps("password")}
              name="password"
            />
            <ErrorMessage name="password">
              {(msg) => <div className="error-msg">{msg}</div>}
            </ErrorMessage>
            <Container.Text>
              <a href="https://opl-dash.vercel.app/login" alt="admin">
                Are you admin ? Click here!
              </a>
            </Container.Text>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginRight: "350px" }}
              >
                Log In
              </Button>
              <div className="nav-register">
                <NavLink to="/register">
                  <Button type="primary" htmlType="submit">
                    Register
                  </Button>
                </NavLink>
              </div>
            </div>
          </Container.Form>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
