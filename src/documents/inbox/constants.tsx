import { Button, Tooltip } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

export const COLUMNS = [
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
