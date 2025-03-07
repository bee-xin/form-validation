import { Button, Form, Input } from "antd";
import axios from "axios";
import React from "react";
import { API_BASE_URL } from "../../apiconfig";
import { Navigate, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  if (localStorage.getItem("token")) {
    return <Navigate to="/home" />;
  }
  const onFinish = async (values) => {
    try {
      const res = await axios.post(
        `${API_BASE_URL}/api/v1/register`,
        {
          email: values.email,
          full_name: values.username,
          password: values.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/login");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Validation Failed", errorInfo);
  };
  return (
    <div className="border border-amber-300 w-[300px] h-auto p-4">
      <Form
        className="px-2 "
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "please input your email!",
            },
          ]}
        >
          <Input type="email" className="w-[200px] m-4 p-3" />
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "please input your username!",
            },
          ]}
        >
          <Input className="w-[200px] m-4 p-3" type="text" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "please input your password",
            },
          ]}
        >
          <Input.Password type="password"></Input.Password>
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
