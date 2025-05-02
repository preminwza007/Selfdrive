/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const Header = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8 dashboard-fullscreen" style={{ position: "relative", minHeight: "100vh" }}>
        <Container fluid>
          <div className="header-body">
            {/* การ์ดเรียงล่างสุด ซ้ายไปขวา และเขยิบขึ้นเล็กน้อย */}
            <div
              className="d-flex justify-content-start position-absolute w-100 px-4"
              style={{ bottom: "80px" }}  // <-- ปรับตรงนี้เพื่อยกขึ้น
            >
              <Card className="card-stats me-3" style={{ width: "18rem" }}>
                <CardBody>
                  <Row>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-success text-white rounded-circle shadow">
                        <i className="fas fa-battery-half" style={{ color: '#fff' }} /> {/* สีไอคอนเป็นสีขาว */}
                      </div>
                    </Col>
                    <div className="col">
                      <CardTitle tag="h5" className="text-uppercase text-muted mb-0" style={{ fontSize: "18px", color: "#fff" }}>
                        Battery
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0" style={{ fontSize: "24px", color: "#fff" }}>35%</span>
                    </div>
                  </Row>
                </CardBody>
              </Card>

              <Card className="card-stats me-3" style={{ width: "18rem" }}>
                <CardBody>
                  <Row>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                        <i className="fas fa-tachometer-alt" style={{ color: '#fff' }} /> {/* สีไอคอนเป็นสีขาว */}
                      </div>
                    </Col>
                    <div className="col">
                      <CardTitle tag="h5" className="text-uppercase text-muted mb-0" style={{ fontSize: "18px", color: "#fff" }}>
                        Speed
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0" style={{ fontSize: "24px", color: "#fff" }}>2,356</span>
                    </div>
                  </Row>
                </CardBody>
              </Card>

              <Card className="card-stats me-3" style={{ width: "18rem" }}>
                <CardBody>
                  <Row>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                        <i className="fas fa-road" style={{ color: '#fff' }} /> {/* สีไอคอนเป็นสีขาว */}
                      </div>
                    </Col>
                    <div className="col">
                      <CardTitle tag="h5" className="text-uppercase text-muted mb-0" style={{ fontSize: "18px", color: "#fff" }}>
                        Degree
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0" style={{ fontSize: "24px", color: "#fff" }}>180°</span>
                    </div>
                  </Row>
                </CardBody>
              </Card>

              <Card className="card-stats" style={{ width: "18rem" }}>
                <CardBody>
                  <Row>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                        <i className="fas fa-percent" style={{ color: '#fff' }} /> {/* สีไอคอนเป็นสีขาว */}
                      </div>
                    </Col>
                    <div className="col">
                      <CardTitle tag="h5" className="text-uppercase text-muted mb-0" style={{ fontSize: "18px", color: "#fff" }}>
                        Performance
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0" style={{ fontSize: "24px", color: "#fff" }}>49.65%</span>
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;


