import { Col, Row } from "antd";
import React from "react";
import { CardPlaceholder } from "../card/CardPlaceholder";

const placeholders = Array.from(Array(6).keys());

export const PatientListPlaceholder: React.FC = () => (
  <Row gutter={[32, 32]}>
    {placeholders.map((card) => {
      return (
        <Col xs={24} sm={12} lg={8} key={card}>
          <CardPlaceholder />
        </Col>
      );
    })}
  </Row>
);
