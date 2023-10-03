import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  MenuOutlined,
  HomeOutlined,
  PeopleOutlined,
  DehazeOutlined,
} from "@mui/icons-material";
import "./styles.css";

const Main = () => {
  const [collapsed, setCollapsed] = useState(false);

  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <Sidebar
      className={`app ${toggled ? "toggled" : ""}`}
      transitionDuration={500}
      style={{ height: "100vh" }}
      collapsed={collapsed}
      toggled={toggled}
      backgroundColor="#e9dcc9"
      handleToggleSidebar={handleToggleSidebar}
      handleCollapsedChange={handleCollapsedChange}
    >
      <Menu>
        {collapsed ? (
          <MenuItem
            icon={<DehazeOutlined />}
            onClick={handleCollapsedChange}
          ></MenuItem>
        ) : (
          <MenuItem suffix={<DehazeOutlined />} onClick={handleCollapsedChange}>
            <div
              style={{
                padding: "9px",
                fontWeight: "bold",
                fontSize: 14,
                letterSpacing: "1px",
              }}
            >
              LOGO
            </div>
          </MenuItem>
        )}
      </Menu>

      <Menu>
        <MenuItem icon={<HomeOutlined />}>Dashboard</MenuItem>
        <SubMenu defaultOpen label={"User Managemet"} icon={<PeopleOutlined />}>
          <MenuItem>Active </MenuItem>
          <MenuItem>Ex Professors</MenuItem>
          <MenuItem>Probation Period</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
};

export default Main;
