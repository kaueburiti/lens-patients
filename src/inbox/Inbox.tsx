import { Button, Table } from "antd";
import dateFormat from "dateformat";
import { DownloadOutlined } from "@ant-design/icons";
import React from "react";

const columns = [
  {
    title: "Doc. Type",
    dataIndex: "documentType",
    key: "documentType",
    width: 60,
  },
  { title: "From", dataIndex: "sender", key: "sender", width: 60 },
  { title: "Date", dataIndex: "date", key: "date", width: 60 },
  {
    title: "",
    dataIndex: "",
    fixed: "right",
    align: "center",
    width: 30,
    key: "x",
    render: () => (
      <Button type="primary" icon={<DownloadOutlined />} shape="circle" />
    ),
  },
];

const data = [
  {
    key: 1,
    documentType: "Medical History",
    sender: "Memorial Hospital",
    date: dateFormat(new Date(), "mmmm dS, h:MM:ss TT"),
  },
  {
    key: 2,
    documentType: "Metabolic Lab Report",
    sender: "Memorial Hospital",
    date: dateFormat(new Date(), "mmmm dS, h:MM:ss TT"),
  },
  {
    key: 3,
    documentType: "Metabolic Lab Report",
    sender: "Memorial Hospital",
    date: dateFormat(new Date(), "mmmm dS, h:MM:ss TT"),
  },
  {
    key: 4,
    documentType: "Presciption Request",
    sender: "Memorial Hospital",
    date: dateFormat(new Date(), "mmmm dS, h:MM:ss TT"),
  },
];

export const Inbox: React.FC = () => {
  return (
    <Table
      pagination={{ pageSize: 3 }}
      // @ts-ignore
      columns={columns}
      scroll={{ x: 600 }}
      dataSource={data}
    />
  );
};
