import { Button, Form, Input } from "antd";
import axios from "axios";
import React from "react";
import { API_BASE_URL } from "../../apiconfig";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  if (localStorage.getItem("token")) {
    return <Navigate to="/home" />;
  }

  const onFinish = async (values) => {
    try {
      const res = await axios.post(
        `${API_BASE_URL}/api/login`,
        {
          email: values.email,
          password: values.password,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      localStorage.setItem("token", res.data.access_token);
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.error("Validation Failed", errorInfo);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-900">
      <div
        className="flex flex-col items-center p-6 w-[360px] h-auto 
                      bg-white/20 backdrop-blur-md shadow-lg rounded-2xl border border-white/30"
      >
        <div className="mb-4 text-center">
          <p className="text-2xl font-semibold text-white">Sign In</p>
          <p className="text-gray-200">
            Keep it all together and you will be fine.
          </p>
        </div>

        <Form
          className="w-full flex flex-col gap-4"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              placeholder="Password"
              className="w-full p-3 border rounded-md"
            />
          </Form.Item>
          <Button htmlType="submit" type="primary">
            Log in
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
