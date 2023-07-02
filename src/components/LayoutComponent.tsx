import React from "react";
import { Breadcrumb, Layout, Menu, theme, Button, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  SettingOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const { Header, Content, Footer, Sider } = Layout;

export default function LayoutComponent() {
  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      width: 150,
    },
    {
      title: "Age",
      dataIndex: "age",
      width: 150,
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];

  const data: DataType[] = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }

  const menuItems = [
    {
      key: "menu-items-1",
      label: "Home",
    },
    {
      key: "menu-items-2",
      label: "Services",
    },
    {
      key: "menu-items-3",
      label: "Our Team",
    },
    {
      key: "menu-items-4",
      label: "About",
    },
    {
      key: "menu-items-5",
      label: "Contact",
    },
  ];

  const sidebarItems = [
    {
      key: "sidebar-items-1",
      icon: <UsergroupAddOutlined />,
      label: "Users",
    },
    {
      key: "sidebar-items-2",
      icon: <UsergroupAddOutlined />,
      label: "Organization",
      children: [
        {
          key: "sidebar-items-2",
          icon: <UsergroupAddOutlined />,
          label: "Organization",
        },
        {
          key: "sidebar-items-2",
          icon: <UsergroupAddOutlined />,
          label: "Organization",
        },
      ],
    },
    {
      key: "sidebar-items-3",
      icon: <UsergroupAddOutlined />,
      label: "Roles",
    },
    {
      key: "sidebar-items-4",
      icon: <UsergroupAddOutlined />,
      label: "Integrations",
    },
    {
      key: "sidebar-items-5",
      icon: <SettingOutlined />,
      label: "Preference",
    },
    {
      key: "sidebar-items-6",
      icon: <MoneyCollectOutlined />,
      label: "Subscription",
    },
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={menuItems.map((item) => {
            return {
              key: item?.key,
              label: item?.label,
            };
          })}
        />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0, textAlign: "left" }}
            items={sidebarItems.map((item) => {
              return {
                key: item?.key,
                icon: item?.icon,
                label: item?.label,
              };
            })}
          />
        </Sider>

        <Layout style={{ padding: "0 24px 24px" }}>
          <Space style={{ justifyContent: "space-between" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Button type="primary" size="middle" block={false}>
              + Add User
            </Button>
          </Space>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Table
              columns={columns}
              dataSource={data}
              pagination={{ pageSize: 10 }}
              //   scroll={{ y: 240 }}
            />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
