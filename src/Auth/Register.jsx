import { Button, Form, Input } from "antd";
import axios from "axios";
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
        `${API_BASE_URL}/api/register`,
        {
          email: values.email,
          name: values.username,
          password: values.password,
          password_confirmation: values.password_confirmation,
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
    <div className="flex items-center justify-center h-screen p-4 bg-gray-900 text-amber-50">
      <div className="flex flex-row w-100 h-120 justify-center bg-white/20 backdrop-blur-md shadow-lg rounded-2xl border border-white/30">
        <div className="flex flex-col ">
          <div className="text-center w-full h-auto mt-5 mb-5 font-bold text-2xl p-2">
            Create your account
          </div>
          <Form
            layout="vertical"
            className="w-80 "
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label={<span className="text-white">Email</span>}
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
              label={<span className="text-white">Username</span>}
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
              label={<span className="text-white"> Password</span>}
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
            <Form.Item
              label={<span className="text-white">Confirm password</span>}
            >
              <Input.Password type="password"></Input.Password>
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
