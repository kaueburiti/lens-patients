import { Button, Table, Tooltip } from "antd";
import dateFormat from "dateformat";
import { DownloadOutlined } from "@ant-design/icons";
import React from "react";
import { useQuery } from "react-query";
import { getDocumentsFromPatient } from "../api/api";

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
      <Tooltip title="Download not implemented, sorry!" placement="top">
        <Button type="primary" icon={<DownloadOutlined />} shape="circle" />
      </Tooltip>
    ),
  },
];

export const Inbox: React.FC<{ patientId: string }> = ({ patientId }) => {
  const { isLoading, data: d2 } = useQuery<any[], Error>(
    `documents-${patientId}`,
    () => getDocumentsFromPatient(patientId)
  );

  const getData = () => {
    if (!d2) return [];

    return d2.map((d) => {
      return {
        key: d.id,
        documentType: d.summary,
        sender: d.mailer,
        date: dateFormat(d.date, "mmmm dS, h:MM:ss TT"),
      };
    });
  };

  return (
    <Table
      pagination={{ pageSize: 3 }}
      // @ts-ignore
      columns={columns}
      loading={isLoading}
      scroll={{ x: 600 }}
      dataSource={getData()}
    />
  );
};
