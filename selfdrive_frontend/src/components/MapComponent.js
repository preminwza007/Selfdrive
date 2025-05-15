import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";  // ต้องเพิ่มการเรียกใช้ L เพื่อใช้ในการกำหนด icon
import "leaflet/dist/leaflet.css"; // ไฟล์ CSS ของ Leaflet

const MapComponent = () => {
    // ตั้งค่า center ของแผนที่ให้เป็นจุดนี้
    const center = [13.8210552, 100.5120989]; // เปลี่ยนค่า center ตรงนี้
    const zoom = 17; // ระดับการซูมของแผนที่

    // สร้าง icon สำหรับ Marker
    const customIcon = new L.Icon({
        iconUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Map_marker_icon.png", // URL รูปภาพของไอคอน
        iconSize: [32, 32], // ขนาดของ icon
        iconAnchor: [16, 32], // จุดยึดของ icon
        popupAnchor: [0, -32], // ตำแหน่งของ popup
    });

    return (
        <div style={{ flex: 1, height: "700px", borderRadius: "15px", overflow: "hidden" }}>
            <MapContainer
                center={center} // ตั้งให้ center ของแผนที่เป็นพิกัดที่ต้องการ
                zoom={zoom}
                style={{ height: "100%", width: "100%", borderRadius: "15px" }} // เพิ่ม border-radius
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {/* ปัก Marker ที่ตำแหน่งที่ต้องการ */}
                <Marker position={center} icon={customIcon}>
                    <Popup>ตึก 40 มจพ.</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapComponent;
