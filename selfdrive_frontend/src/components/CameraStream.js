// src/components/CameraStream.js

import React, { useEffect, useState } from "react";
import { Card, CardBody } from "reactstrap";

const CameraStream = () => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const socket = new WebSocket("ws://89.213.177.84:8765/ws");

    socket.onopen = () => {
      console.log("📡 WebSocket connected to server");
    };

    socket.onmessage = (event) => {
      const base64Image = event.data;

      // ต้องเป็น base64 ที่มี prefix แล้ว เช่น: data:image/jpeg;base64,...
      if (base64Image.startsWith("data:image")) {
        setImageSrc(base64Image);
      }
    };

    socket.onerror = (error) => {
      console.error("❌ WebSocket error:", error);
    };

    socket.onclose = () => {
      console.log("🔌 WebSocket connection closed");
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <Card
      className="shadow"
      style={{
        width: "100%",
        height: "100%",
        zIndex: 100,
        backgroundColor: "#000", // ทำให้พื้นหลังกล้องเป็นสีดำ
        borderRadius: "15px", // ทำให้ขอบของกล้องมน
        overflow: "hidden", // ซ่อนเนื้อหาที่เกินขอบ
      }}
    >
      <CardBody className="text-center" style={{ height: "100%" }}>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="Live Stream"
            style={{
              width: "100%", // ขยายให้เต็มขนาดของกล่อง
              height: "80%",
              borderRadius: "15px", // ขอบมนที่ภาพ
            }}
          />
        ) : (
          <p style={{ color: "white", fontSize: "20px" }}>🔄 Waiting for stream...</p>
        )}
      </CardBody>
    </Card>
  );
};

export default CameraStream;
