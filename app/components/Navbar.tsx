"use client";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  InputBase, 
  Box, 
  Avatar, 
  IconButton, 
  Badge,
  Chip
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled, alpha } from "@mui/material/styles";
import { useUIStore } from "@/store/uiStore";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.08),
  },
  marginLeft: 0,
  width: "300px",
  marginRight: theme.spacing(3),
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const LanguageChip = styled(Chip)(({ theme }) => ({
  backgroundColor: "transparent",
  border: "none",
  color: theme.palette.text.secondary,
  "& .MuiChip-avatar": {
    backgroundColor: "#ef4444",
    color: "white",
    fontSize: "12px",
  },
  "& .MuiChip-deleteIcon": {
    color: theme.palette.text.secondary,
    fontSize: "18px",
  },
}));

const UserSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  padding: theme.spacing(0.5),
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.04),
  },
}));

export default function Navbar() {
  const { title } = useUIStore();

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: "white", 
        color: "black",
        boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
        borderBottom: "1px solid #e5e7eb",
        height: "80px"
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: 3 }}>
        {/* Left side - Dashboard title */}
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ 
            fontWeight: 600,
            fontSize: "20px",
            color: "#111827",
            minHeight: "80px !important",
            display: "flex",
            alignItems: "center"
          }}
        >
          {title}
        </Typography>

        {/* Right side - Search, Language, Notifications, User */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Search Bar */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "#5d5fef" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search here..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          {/* Language Selector */}
          <LanguageChip
            avatar={<Avatar
              // src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              src="/images/United.svg"
              sx={{ width: 32, height: 32, mr: 1 }}
            />}
            label="Eng (US)"
            deleteIcon={<KeyboardArrowDownIcon />}
            onDelete={() => {}}
            variant="outlined"
          />

          {/* Notification Bell */}
          <IconButton sx={{ color: "#6b7280" }}>
            <Badge
              badgeContent=" "
              // sx={{
              //   "& .MuiBadge-badge": {
              //     backgroundColor: "#f97316",
              //     width: 8,
              //     height: 8,
              //     minWidth: 8,
              //     borderRadius: "50%",
              //     right: 6,
              //     top: 6,
              //   },
              // }}
            >
              <Avatar
              // src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              src="/images/Notifications.svg"
              sx={{ width: 40, height: 40 , mr: 1 }}
            />
            </Badge>
          </IconButton>

          {/* User Profile */}
          <UserSection>
            <Avatar
              // src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              src="/images/User.png"
              sx={{ width: 32, height: 32, mr: 1 }}
            />
            <Box sx={{ textAlign: "left", mr: 0.5 }}>
              <Typography
                variant="body2"
                sx={{ 
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: 1.2,
                  color: "#111827"
                }}
              >
                Musfiq
              </Typography>
              <Typography
                variant="caption"
                sx={{ 
                  color: "#6b7280",
                  fontSize: "12px",
                  lineHeight: 1,
                }}
              >
                Admin
              </Typography>
            </Box>
            <KeyboardArrowDownIcon sx={{ color: "#6b7280", fontSize: 18 }} />
          </UserSection>
        </Box>
      </Toolbar>
    </AppBar>
  );
}