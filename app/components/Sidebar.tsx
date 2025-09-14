"use client";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography, 
  Button,
  Card,
  Avatar,
  CardContent,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import AssessmentIcon from "@mui/icons-material/Assessment";
import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import LinkIcon from "@mui/icons-material/Link";
import { useUIStore } from "@/store/uiStore";

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon /> },
  { text: "Leaderboard", icon: <LeaderboardIcon /> },
  { text: "Order", icon: <ShoppingCartIcon /> },
  { text: "Products", icon: <Inventory2Icon /> },
  { text: "Sales Report", icon: <AssessmentIcon /> },
  { text: "Messages", icon: <MessageIcon /> },
  { text: "Settings", icon: <SettingsIcon /> },
  { text: "Sign Out", icon: <LogoutIcon /> },
];

export default function Sidebar() {
  const { title, setTitle } = useUIStore();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 280, 
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 280, 
          boxSizing: "border-box",
          borderRight: "1px solid #f1f5f9",
          px: 3, 
          py: 3,
        },
      }}
    >
      <Box display="flex" alignItems="center" mb={4}>
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: 1,
            backgroundColor: "#6366f1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
            mr: 1.5,
          }}
        >
          <Avatar
              // src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              src="/images/Mlogo.svg"
              sx={{ width: 32, height: 32, borderRadius: '2'}}
          />
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 700, color: "#111827" }}>
          Dabang
        </Typography>
      </Box>

      {/* Menu */}
      <List sx={{ flexGrow: 1 }}>
        {menuItems.map((item) => {
          const isActive = title === item.text;
          return (
            <ListItemButton
              key={item.text}
              onClick={() => setTitle(item.text)}
              sx={{
                mb: 1,
                borderRadius: 2,
                bgcolor: isActive ? "#6366f1" : "transparent",
                color: isActive ? "white" : "#374151",
                "&:hover": {
                  bgcolor: isActive ? "#4f46e5" : "#f3f4f6",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: isActive ? "white" : "#6b7280",
                  minWidth: 36,
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: "14px",
                  fontWeight: isActive ? 600 : 400,
                }}
              />
            </ListItemButton>
          );
        })}
      </List>

      {/* Pro Card at Bottom */}
      <Card
        sx={{
          backgroundColor: "#6366f1",
          color: "white",
          borderRadius: 3,
          textAlign: "center",
          boxShadow: "none",
        }}
      >
        <CardContent>
          <Box
            sx={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              backgroundColor: "white",
              color: "#6366f1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              fontWeight: "bold",
              mx: "auto",
              mb: 2,
            }}
          >
            <Avatar
              // src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              src="/images/getpro.svg"
              sx={{ width: 32, height: 32, }}
          />
          </Box>
          <Typography variant="subtitle1" fontWeight={600}>
            Dabang Pro
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
            Get access to all features on botumas
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "#6366f1",
              textTransform: "none",
              fontWeight: 600,
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "#f9fafb",
              },
            }}
          >
            Get Pro
          </Button>
        </CardContent>
      </Card>
    </Drawer>
  );
}