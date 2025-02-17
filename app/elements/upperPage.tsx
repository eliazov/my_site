"use client";
import { Button, DatePicker } from "antd";
import React, { useState } from "react";
import { Header } from "antd/es/layout/layout";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
export function UpperPage() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Header>
        <h1 style={{ color: "white" }}>hello</h1>
        <DatePicker />
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{ marginBottom: 16 }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </Header>
    </>
  );
}
