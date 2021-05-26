import { Table } from "antd";
import dateFormat from "dateformat";
import React from "react";
import { useQuery } from "react-query";
import { Documents } from "../types/Documents.type";
import { InboxProps } from "./Inbox.types";
import { COLUMNS } from "./constants";
import { getDocumentsFromPatient } from "../api/api";

export const Inbox: React.FC<InboxProps> = ({ patientId }) => {
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
