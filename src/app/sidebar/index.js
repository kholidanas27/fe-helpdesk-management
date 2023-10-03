import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  MenuOutlined,
  HomeOutlined,
  PeopleOutlined,
} from "@mui/icons-material";
const Main = () => {
  return (
    <Sidebar
      breakPoint="sm"
      transitionDuration={800}
      backgroundColor="#E9DCC9"
      rtl={false}
      style={{ height: "100vh" }}
    >
      <Menu>
        <MenuItem icon={<MenuOutlined />} style={{ textAlign: "center" }}>
          {" "}
          <h2>Helpdesk Management</h2>
        </MenuItem>
        <MenuItem icon={<HomeOutlined />}>Home</MenuItem>
        <MenuItem icon={<PeopleOutlined />}>Team</MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default Main;
