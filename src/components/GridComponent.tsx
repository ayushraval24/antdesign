import React from "react";
import { Col, Divider, Row } from "antd";

const style: React.CSSProperties = { background: "#0092ff", padding: "20px" };

// gutter property of Row as grid spacing
// offset for columns The number of cells to offset Col from the left

export default function GridComponent() {
  return (
    <>
      <Divider orientation="left">Responsive</Divider>
      {/* <Row gutter={0}> */}
      <Row>
        <Col xs={24} xl={8}>
          <div style={style}>col-6</div>
        </Col>
        <Col xs={24} xl={8}>
          <div style={style}>col-6</div>
        </Col>
        <Col xs={24} xl={8}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
      <Row>
        <Col xs={24} xl={7} offset={1}>
          <div style={style}>col-6</div>
        </Col>
        <Col xs={24} xl={7} offset={1}>
          <div style={style}>col-6</div>
        </Col>
        <Col xs={24} xl={7} offset={1}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
    </>
  );
}
