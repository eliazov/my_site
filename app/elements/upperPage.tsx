"use client";
import { Button, Col, DatePicker, Row, Space, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { Header } from "antd/es/layout/layout";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { relative } from "path";

export function UpperPage() {
  const [headerHeight, setHeaderHeight] = useState(400);
  const [imageSize, setImageSize] = useState(300);
  const [textPositionX, setTextPositionX] = useState(50);
  const [opacity, setOpacity] = useState(1);
  const [display, setDisplay] = useState("unset");
  console.log(textPositionX);
  useEffect(() => {
    const handleScroll = () => {
      const newHeight = Math.max(130, 400 - window.scrollY);
      setHeaderHeight(newHeight);

      const newPosition = Math.max(10, 50 - window.scrollY);
      setTextPositionX(newPosition);

      const newSize = Math.max(110, 300 - window.scrollY);
      setImageSize(newSize);

      const newOpacity = Math.max(0, 1 - window.scrollY / 180);
      if (newOpacity === 0) {
        setDisplay("none");
      } else {
        setDisplay("unset");
      }
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerStyle: React.CSSProperties = {
    //textAlign: "center",
    width: "100%",
    color: "black",
    height: headerHeight,

    lineHeight: "60px",
    backgroundColor: "white",
    position: "fixed",
    boxShadow: "0 1px 8px rgba(61, 61, 61, 0.25)",
  };

  const handleTabChange = (key: string) => {
    const section = document.getElementById(`section-${key}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Header style={headerStyle}>
        <Space size={50} style={{ position: "relative", left: textPositionX }}>
          <div>
            <img
              src="https://i1.sndcdn.com/avatars-000151457796-h5bbud-t240x240.jpg"
              alt="logo"
              width={imageSize}
              height={imageSize}
              style={{ borderRadius: "50%", padding: 10 }}
            ></img>
          </div>
          <div style={{ height: imageSize, paddingTop: imageSize / 4 }}>
            <p style={{ fontSize: 20, fontStyle: "oblique" }}>Elia Zovico</p>
            <p style={{ opacity: opacity, display: display }}>
              Some text for the description djnfkfbrekjjjjj ferjfbekrjreb
              <br></br>Some
            </p>
          </div>
        </Space>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "90%",
            height: 50,

            textAlign: "center",

            fontWeight: "bold",
            lineHeight: "30px",
          }}
        >
          <Tabs
            defaultActiveKey="1"
            centered
            onChange={handleTabChange}
            items={[
              { label: "Tab 1", key: "1" },
              { label: "Tab 2", key: "2" },
              { label: "Tab 3", key: "3" },
            ]}
          />
        </div>
      </Header>
      <div style={{ height: 450 }}></div>
      <div style={{ padding: 24, minHeight: 1100, background: "white" }}>
        <div id="section-1" style={{ height: "100vh" }}>
          <h2>Sezione 1</h2>
          Contenuto della prima sezione
        </div>
        <div id="section-2" style={{ height: "100vh" }}>
          <h2>Sezione 2</h2>
          Contenuto della seconda sezione
        </div>
        <div id="section-3" style={{ height: "100vh" }}>
          <h2>Sezione 3</h2>
          Contenuto della terza sezione
        </div>
      </div>
    </>
  );
}
