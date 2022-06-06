import React, { ReactNode } from 'react'
import {
  LayoutNavigationTree,
} from 'react-md'

import {
  DashboardSVGIcon,
  SettingsSVGIcon,
  MapSVGIcon,
  ReceiptSVGIcon,
  StarSVGIcon,
  FormatShapesSVGIcon,
  PinDropSVGIcon,
  BatteryStdSVGIcon,
  PeopleSVGIcon,
  LibraryMusicSVGIcon,

} from "@react-md/material-icons";


const navItems: LayoutNavigationTree = {
  "/": {
    href:"/admin/dashboard",
    itemId: "/",
    parentId: null,
    children: "Dashboard",
    leftAddon: <DashboardSVGIcon />,
  },
  "/maps": {
    href:"/admin/maps",
    itemId: "/maps",
    parentId: null,
    children: "Maps",
    leftAddon: <MapSVGIcon />,
  },
  "/layouts": {
    href:"/admin/layouts",
    itemId: "/layouts",
    parentId: null,
    children: "Layouts",
    leftAddon: <FormatShapesSVGIcon />,
  },
  "/battery": {
    href:"/admin/battery",
    itemId: "/battery",
    parentId: null,
    children: "Battery",
    leftAddon: <BatteryStdSVGIcon />,
  },
  "/products": {
    href:"/admin/products",
    itemId: "/products",
    parentId: null,
    children: "Products",
    leftAddon: <StarSVGIcon />,
  },
  "/report": {
    href:"/admin/report",
    itemId: "/report",
    parentId: null,
    children: "Report",
    leftAddon: <ReceiptSVGIcon />,
  },
  "/divider-1": {
    itemId: "/divider-1",
    parentId: null,
    divider: true,
    isCustom: true,
  },
  "/settings": {
    itemId: "/settings",
    parentId: null,
    children: "Settings",
    leftAddon: <SettingsSVGIcon />,
  },
  "/robot": {
    href:"/admin/robot",
    itemId: "/robot",
    parentId: "/settings",
    children: "Robot",
    leftAddon: <SettingsSVGIcon />,
  },
  "/location": {
    href:"/admin/location",
    itemId: "/location",
    parentId: "/settings",
    children: "Location",
    leftAddon: <PinDropSVGIcon />,
  },
  "/users": {
    href:"/admin/users",
    itemId: "/users",
    parentId: "/settings",
    children: "Users",
    leftAddon: <PeopleSVGIcon />,
  },
  "/sounds": {
    href:"/admin/sounds",
    itemId: "/sounds",
    parentId: "/settings",
    children: "Sounds",
    leftAddon: <LibraryMusicSVGIcon />,
  },

};

export default navItems
