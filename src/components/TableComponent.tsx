import React from "react";
import { Table } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";

interface DataType {
  key?: React.Key;
  id: number;
  name: string;
  email: string;
  phone: string;
  status: boolean;
}

export default function TableComponent(props: {
  columns: ColumnsType<DataType>;
  dataSource: DataType[];
  pagination: TablePaginationConfig;
  tableHandler: any;
}) {
  const { columns, dataSource, pagination, tableHandler } = props;

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={pagination}
      //   pagination={{ pageSize: pageSize, position: ["bottomCenter"] }}
      onChange={tableHandler}
    />
  );
}
