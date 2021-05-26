import { Button, Table, Tooltip } from "antd";
import dateFormat from "dateformat";
import { DownloadOutlined } from "@ant-design/icons";
import React from "react";
import { useQuery } from "react-query";
import { getDocumentsFromPatient } from "../api/api";
import { Documents } from "./Documents.type";

const COLUMNS = [
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
      <Tooltip title="Download not implemented, sorry!" placement="top">
        <Button type="primary" icon={<DownloadOutlined />} shape="circle" />
      </Tooltip>
    ),
  },
];

export const Inbox: React.FC<{ patientId: string }> = ({ patientId }) => {
  const { isLoading, data: documents } = useQuery<Documents[], Error>(
    `documents-${patientId}`,
    () => getDocumentsFromPatient(patientId)
  );

  const getDocumentsData = () => {
    if (!documents) return [];

    return documents.map((document) => {
      return {
        key: document.id,
        documentType: document.summary,
        sender: document.mailer,
        date: dateFormat(document.date, "mmmm dS, h:MM:ss TT"),
      };
    });
  };

  return (
    <Table
      pagination={{ pageSize: 3 }}
      // @ts-ignore
      columns={COLUMNS}
      loading={isLoading}
      scroll={{ x: 600 }}
      dataSource={getDocumentsData()}
    />
  );
};
