"use client";
import { useState } from "react";
import React from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  Space,
  Tooltip,
  Typography,
  message,
} from "antd";
import {
  LockOutlined,
  PhoneOutlined,
  UserAddOutlined,
  ProfileOutlined,
  MobileOutlined,
  UserOutlined,
  MailOutlined,
  CheckOutlined,
  ArrowRightOutlined,
  IdcardOutlined,
} from "@ant-design/icons";

import axios from "axios";

const { Option } = Select;

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Email sent successfully",
    });
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Error sending email",
    });
  };
  const validateMessages = {
    required: `Email is required!`,
    types: {
      email: `Enter a valid email!`,
      // number: `${label} is not a valid number!`,
    },
    // number: {
    //   range: `${label} must be between ${min} and ${max}`,
    // },
  };

  const onFinish = async (values: any) => {
    console.log("Received values of form: ", values, form);
    try {
      setLoading(true);
      //  await axios.post("http://localhost:3000/sales/send-email", {
      await axios.post("https://api.terabyt.io/sales/send-email", {
        email: values["email"],
        name: values["name"],
        companyName: values["companyName"],
        phoneNumber: values["phoneNumber"],
        jobRole: values["jobRole"],
      });
      console.log("Email sent successfully");
      success();
    } catch (_error) {
      console.error("Error sending email:", _error);
      error();
    } finally {
      form.resetFields();
      setLoading(false);
    }
  };

  return (
    <>
      {contextHolder}
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        style={{
          width: "300px",
          maxWidth: "300px",
          textOverflow: "ellipsis",
          textWrap: "nowrap",
        }}
        validateMessages={validateMessages}
      > 
        <Form.Item
          name="email"
          rules={[
            { type: "email" },
            { required: true, message: "Please input your Business Email!" },
            { whitespace: true, message: "No whitespace" },
          ]}
        > 
          <Input
            className="rounded-lg "
            prefix={<MailOutlined />}
            placeholder="Business Email*"
          />
        </Form.Item>
        <Form.Item
          name="name"
          rules={[
            { required: true, message: "Please input your Name!" },
            { whitespace: true, message: "No whitespace" },
          ]}
        >
          <Input
            className="rounded-lg"
            prefix={<UserOutlined />}
            placeholder="Name*"
          />
        </Form.Item>
        <Form.Item
          name="companyName"
          rules={[
            { required: true, message: "Please input your Company Name!" },
            { whitespace: true, message: "No whitespace" },
          ]}
        >   <div className="relative">
        <Input
          className="rounded-lg pl-10" // Adjust left padding to accommodate the icon
          placeholder="Company Name*"
          color="#464646"
        />
        <img src="/company.svg" className="absolute left-3 top-1/2 transform -translate-y-1/2" alt="" />
      </div>
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          rules={[
            { required: true, message: "Please input your Phone Number!" },
            { whitespace: true, message: "No whitespace" },
          ]}
        >
          <Input
            className="rounded-lg"
            prefix={<PhoneOutlined/>}
            placeholder="Phone Number"
            style={{ color: "#464646" }}
          />
        </Form.Item>
        <Form.Item
          name="jobRole"
          rules={[
            { required: true, message: "Please select Job!" },
            { whitespace: true, message: "No whitespace" },
          ]}
        >
          <Select
            className="flex relative "
            placeholder={
              <span>
                {/* <img src="/job-role.svg" className="flex absolute pt-[20px]" alt="" /> */}
                <IdcardOutlined  style={{ color: "#464646" }} />
                Job Role
              </span>
            }
            style={{
              width: "300px",
              maxWidth: "300px",
              textOverflow: "ellipsis",
              textWrap: "nowrap",
            }}
          >
            <Option value="Product Manager">
              <CheckOutlined />
              Product Manager
            </Option>
            <Option value="Business Development Manager">
              <CheckOutlined />
              Business Development Manager
            </Option>
            <Option value="User Experience Designer">
              <CheckOutlined />
              User Experience Designer
            </Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className=" flex rounded-lg ml-[90px] relative login-form-button text-[#464646] bg-[#FEFEFE] "
          >
            <span>Submit</span>
            <span className="pl-1">
              <ArrowRightOutlined />
            </span>
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default App;
