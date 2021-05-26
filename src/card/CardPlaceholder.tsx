import React from "react";
import { Spin } from "antd";
import { CardPlaceholderWrapper } from "./CardPlaceholder.styled";

export const CardPlaceholder: React.FC = () => {
  return (
    <CardPlaceholderWrapper>
      <Spin size="large" />
    </CardPlaceholderWrapper>
  );
};
