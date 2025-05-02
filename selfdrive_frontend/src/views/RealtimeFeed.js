import React, { useEffect, useState } from "react";

const RealtimeFeed = () => {
    const [imageData, setImageData] = useState("");

    useEffect(() => {
        const ws = new WebSocket("ws://89.213.177.84:8765/ws/image");

        ws.onmessage = (event) => {
            setImageData(event.data); // รับข้อมูลภาพจาก WebSocket
        };

        ws.onclose = () => {
            console.log("WebSocket disconnected");
        };

        return () => ws.close();
    }, []);

    return (
        <div>
            <h1>Realtime Camera Feed</h1>
            {imageData && (
                <img
                    src={`data:image/jpeg;base64,${imageData}`}
                    alt="Realtime Stream"
                    style={{ width: "100%", height: "auto" }}
                />
            )}
        </div>
    );
};

export default RealtimeFeed;
