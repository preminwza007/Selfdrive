// src/components/Index.js

import { useState } from "react";
import classnames from "classnames";
import Chart from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import CameraStream from "components/CameraStream.js"; // ✅ import component ที่เราสร้าง
import MapComponent from "components/MapComponent";  // ✅ import MapComponent ที่เราสร้าง

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        {/* ใช้ position absolute เพื่อให้กล้องและแผนที่อยู่ด้านบนสุดของหน้าเว็บ */}
        <Row className="mt--10" style={{
          position: "absolute", // ให้ทั้งสองคอมโพเนนต์อยู่เหนือ Container
          top: "0", // ตั้งให้เริ่มต้นจากด้านบนสุดของหน้า
          left: "0", // เริ่มจากด้านซ้ายสุดของหน้า
          width: "100%", // ให้ใช้พื้นที่เต็มความกว้างของหน้าจอ
          display: "flex",
          alignItems: "stretch", // ให้ทั้งสองคอลัมน์มีความสูงเท่ากัน
        }}>
          {/* กล้อง */}
          <Col xl="9" style={{ paddingRight: "10px", display: "flex", alignItems: "stretch" }}>
            {/* เพิ่มความยาวในแนวนอนให้กล้อง */}
            <Card style={{
              width: "100%",
              height: "100%",
              borderRadius: "15px", // เพิ่มขอบมนที่ Card
              overflow: "hidden"  // ซ่อนเนื้อหาที่เกินจากขอบ
            }}>
              <CardHeader>
                <h3 className="mb-0"></h3>
              </CardHeader>
              <CardBody style={{
                height: "100%",
                borderRadius: "15px", // เพิ่มขอบมนให้กับ CardBody
                overflow: "hidden", // ซ่อนเนื้อหาที่เกินขอบ
              }}>
                <div style={{
                  width: "100%",  // ขยายให้เต็มที่ของ container
                  height: "100%", // ทำให้กล้องยาวเต็มขนาดพื้นที่
                  maxWidth: "100%",  // จำกัดความกว้างไม่ให้เกินขนาดของ container
                  maxHeight: "100%",  // จำกัดความสูงไม่เกินขนาดของ container
                  flexGrow: 1,   // ให้กล้องยืดเต็มพื้นที่ที่เหลือ
                  borderRadius: "15px", // เพิ่มขอบมนที่ Card
                  overflow: "hidden",  // ซ่อนเนื้อหาที่เกินออกจากขอบ
                }}>
                  <CameraStream />
                </div>
              </CardBody>
            </Card>
          </Col>

          {/* แผนที่ */}
          <Col xl="3" style={{ display: "flex", alignItems: "stretch" }}>
            <Card style={{
              width: "100%",
              height: "100%",
              borderRadius: "15px", // เพิ่มขอบมนที่แผนที่
              overflow: "hidden"  // ซ่อนเนื้อหาที่เกินจากขอบ
            }}>
              <CardHeader>
                <h3 className="mb-0"></h3>
              </CardHeader>
              <CardBody style={{
                height: "100%",
                borderRadius: "15px", // เพิ่มขอบมนให้กับ CardBody
                overflow: "hidden", // ซ่อนเนื้อหาที่เกินขอบ
              }}>
                <MapComponent />
              </CardBody>
            </Card>
          </Col>
        </Row>

      </Container>
    </>
  );
};

export default Index;
