import React from "react";
import { Button, Popconfirm, Space, Upload, Card } from "antd";

export default function SpaceComponent() {
  return (
    <>
      <Space align="center">
        <Button type="primary">Button</Button>
        <Upload>
          <Button>Click to Upload</Button>
        </Upload>
        <Popconfirm
          title="Are you sure delete this task?"
          okText="Yes"
          cancelText="No"
        >
          <Button>Confirm</Button>
        </Popconfirm>
      </Space>

      <Space
        direction="horizontal"
        size="middle"
        align="center"
        style={{ display: "flex" }}
      >
        <Card title="Card" size="small">
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title="Card" size="small">
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title="Card" size="small">
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Space>
    </>
  );
}
