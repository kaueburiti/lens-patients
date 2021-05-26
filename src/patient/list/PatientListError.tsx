import { Result } from "antd";
import React from "react";

export const PatientListError: React.FC = () => (
  <Result status="500" title="500" subTitle="Sorry, something went wrong." />
);
