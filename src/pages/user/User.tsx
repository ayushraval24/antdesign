import React, { useState, useEffect } from "react";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Button,
  Space,
  Switch,
  Typography,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  UsergroupAddOutlined,
  SettingOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import TableComponent from "../../components/TableComponent";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import type { FilterValue, SorterResult } from "antd/es/table/interface";
import axios from "axios";

const { Text, Link } = Typography;

interface DataType {
  key?: React.Key;
  id: number;
  name: string;
  email: string;
  phone: string;
  status: boolean;
}

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, FilterValue>;
}

const { Header, Content, Footer, Sider } = Layout;

export default function User() {
  const [userData, setUserData] = useState<DataType[]>([]);

  const [tableParameters, setTableParameters] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
      position: ["bottomCenter"],
    },
    sortField: "id",
    sortOrder: "asc",
  });

  const fetchUserData = (
    current: number,
    pageSize: number,
    sort: string,
    order: string
  ) => {
    axios
      .get(`http://localhost:3004/users`, {
        params: {
          _page: current,
          _limit: pageSize,
          _sort: sort,
          _order:
            order === "ascend" ? "asc" : order === "descend" ? "desc" : order,
        },
      })
      .then((res) => {
        setUserData(res?.data);
        setTableParameters({
          ...tableParameters,
          pagination: {
            ...tableParameters.pagination,
            current: current,
            total: res?.headers["x-total-count"],
          },
        });
      })
      .catch((err) => {
        console.log("Err : ", err);
      });
  };

  useEffect(() => {
    fetchUserData(
      tableParameters?.pagination?.current!,
      tableParameters?.pagination?.pageSize!,
      tableParameters?.sortField!,
      tableParameters?.sortOrder!
    );
  }, []);

  const columns: ColumnsType<DataType> = [
    {
      title: "Id",
      dataIndex: "id",
      sorter: true,
      sortDirections: ["ascend", "descend", "ascend"],
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: true,
      sortDirections: ["ascend", "descend", "ascend"],
      // width: 150,
    },
    {
      title: "Email Address",
      dataIndex: "email",
      // width: 150,
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (_, data) => {
        return (
          <Space size="middle">
            <Switch
              checked={data?.status}
              onChange={(e) => handleStatus(e, data?.id)}
            />
            <Text>{data?.status ? "Enabled" : "Disabled"}</Text>
          </Space>
        );
      },
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_, data) => {
        return (
          <Space size="large">
            <EditOutlined />
            <DeleteOutlined />
          </Space>
        );
      },
    },
  ];

  const handleStatus = (status: any, id: number) => {
    setUserData((prev: any) => {
      return prev?.map((item: DataType) => {
        if (item?.id === id) {
          return {
            ...item,
            status: status,
          };
        } else {
          return item;
        }
      });
    });
  };

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

  const tableHandler = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue>,
    sorter: SorterResult<DataType>
  ) => {
    setTableParameters((prev: any) => {
      return {
        ...prev,
        pagination: {
          ...prev?.pagination,
          current: pagination?.current,
        },
      };
    });
    fetchUserData(
      pagination?.current!,
      pagination?.pageSize!,
      sorter?.field as string,
      sorter?.order!
    );
  };

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
              // padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <TableComponent
              columns={columns}
              dataSource={userData}
              pagination={tableParameters?.pagination!}
              tableHandler={tableHandler}
            />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
