"use client";
import React, { useState } from "react";
import { Button, Form, Input, InputNumber, message } from "antd";
import ButtonComponent from "../button.component";
import axios from "axios";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
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
/* eslint-enable no-template-curly-in-string */

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

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

  const onFinish = async (values: any) => {
    console.log("Received values of form: ", values, form);
    try {
      setLoading(true);
      // await axios.post("http://localhost:3000/sales/send-email", {
      await axios.post("https://api.terabyt.io/sales/subscribe-newsletter", {
        email: values["email"],
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
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{
          maxWidth: 700,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={"email"}
          rules={[
            { required: true },
            { type: "email" },
            { whitespace: true, message: "No whitespace" },
          ]}
        >
          <Input
            style={{
              border: "none",
              boxShadow: "none",
              width: "200px",
            }}
            placeholder="Enter your email"
          />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button
            icon={
              <img
                src="https://terabyt.azureedge.net/websiteassets/arrow-outward-black.svg?sp=r&st=2024-05-06T07:18:42Z&se=5024-05-06T15:18:42Z&spr=https&sv=2022-11-02&sr=b&sig=4Ic19M2r%2F9jhyoCEkWYoW1SrVZoKtoU3IIvK6qQnSpk%3D"
                alt="go"
                className="w-[15px] h-[15px] lg:w-[17px] lg:h-[17px]"
              />
            }
            type="default"
            htmlType="submit"
            className="rounded"
          ></Button>
          {/* <ButtonComponent type="primary">
              <img
                src="/arrow-outward.svg"
                alt="go"
                className="w-[15px] h-[15px] lg:w-[17px] lg:h-[17px]"
              />
            </ButtonComponent>  */}
        </Form.Item>
      </Form>
    </>
  );
};

export default App;
