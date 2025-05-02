import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";

const CameraStream = () => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const socket = new WebSocket("ws://89.213.177.84:8765/ws");

    socket.onopen = () => {
      console.log("📡 WebSocket connected to server");
    };

    socket.onmessage = (event) => {
      // รับ base64 image ที่ส่งมาจาก Pi ผ่าน FastAPI
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
        position: "absolute",   // ให้กล้องอยู่ในตำแหน่งที่แน่นอน
        top: "-730px",            // ระยะห่างจากขอบบน
        left: "100px",           // ระยะห่างจากขอบซ้าย
        width: "1100px",         // ขนาดกล้องที่ใหญ่ขึ้น
        height: "300px",        // ความสูงของกล้อง
        zIndex: 100,            // ให้กล้องอยู่ในตำแหน่งบนสุด
      }}
    >
      <CardBody className="text-center">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="Live Stream"
            style={{ width: "100%", height: "auto", borderRadius: "12px" }}
          />
        ) : (
          <p>🔄 Waiting for stream...</p>
        )}
      </CardBody>
    </Card>
  );
};

export default CameraStream;
