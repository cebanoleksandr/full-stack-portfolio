import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { profile } from "../data/profile";

const navItems = [
  { label: "Home", icon: HomeOutlinedIcon, to: "/" },
  { label: "Projects", icon: WorkOutlineOutlinedIcon, to: "/projects" },
];

const socials = [
  { icon: GitHubIcon, href: profile.contacts.github },
  { icon: LinkedInIcon, href: profile.contacts.linkedin },
  { icon: SendIcon, href: profile.contacts.telegram },
];

interface SidebarContentProps {
  onNavigate?: () => void;
}

const SidebarContent = ({ onNavigate }: SidebarContentProps) => (
  <Stack sx={{ height: "100%", justifyContent: "space-between", px: 3, py: 4 }}>
    <Stack spacing={5}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          letterSpacing: 1,
          background: "linear-gradient(90deg, #6d8bff, #ff4fd8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Portfolio
      </Typography>

      <Stack spacing={1}>
        {navItems.map(({ label, icon: Icon, to }) => (
          <NavLink key={label} to={to} end={to === "/"} onClick={onNavigate} style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <Stack
                direction="row"
                spacing={1.5}
                sx={{
                  alignItems: "center",
                  px: 1.5,
                  py: 1,
                  borderRadius: 2,
                  color: isActive ? "text.primary" : "text.secondary",
                  backgroundColor: isActive ? "rgba(109,139,255,0.1)" : "transparent",
                  transition: "color .2s, background-color .2s",
                  "&:hover": {
                    color: "text.primary",
                    backgroundColor: "rgba(109,139,255,0.08)",
                  },
                }}
              >
                <Icon fontSize="small" />
                <Typography variant="body2" sx={{ fontWeight: 600, letterSpacing: 0.5 }}>
                  {label.toUpperCase()}
                </Typography>
              </Stack>
            )}
          </NavLink>
        ))}
      </Stack>
    </Stack>

    <Stack spacing={3}>
      <Stack direction="row" spacing={1}>
        {socials.map(({ icon: Icon, href }) => (
          <Tooltip key={href} title={href}>
            <IconButton
              component="a"
              href={href}
              target="_blank"
              rel="noreferrer"
              size="small"
              sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}
            >
              <Icon fontSize="small" />
            </IconButton>
          </Tooltip>
        ))}
      </Stack>

      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Button
          component="a"
          href="https://drive.google.com/file/d/1FPyweoJ7mcgAhAlVF40IWk4_80mUuOF7/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          variant="outlined"
          fullWidth
          startIcon={<FileDownloadOutlinedIcon />}
          sx={{
            borderColor: "rgba(109,139,255,0.4)",
            color: "text.primary",
            "&:hover": { borderColor: "primary.main", backgroundColor: "rgba(109,139,255,0.08)" },
          }}
        >
          Get CV
        </Button>
      </motion.div>
    </Stack>
  </Stack>
);

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <Box
        component="nav"
        sx={{
          position: "fixed",
          insetBlock: 0,
          left: 0,
          width: 220,
          display: { xs: "none", md: "flex" },
          borderRight: "1px solid",
          borderColor: "divider",
          backgroundColor: "background.paper",
          zIndex: 20,
        }}
      >
        <SidebarContent />
      </Box>

      <IconButton
        onClick={() => setMobileOpen(true)}
        aria-label="Open menu"
        sx={{
          display: { xs: "flex", md: "none" },
          position: "fixed",
          top: 12,
          left: 12,
          zIndex: 1250,
          color: "text.primary",
          backgroundColor: "rgba(11,13,22,0.85)",
          backdropFilter: "blur(6px)",
          border: "1px solid rgba(255,255,255,0.1)",
          "&:hover": { backgroundColor: "rgba(11,13,22,0.95)" },
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 260,
            backgroundColor: "background.paper",
            backgroundImage: "none",
          },
        }}
      >
        <IconButton
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
          sx={{ position: "absolute", top: 12, right: 12, color: "text.secondary" }}
        >
          <CloseIcon />
        </IconButton>
        <SidebarContent onNavigate={() => setMobileOpen(false)} />
      </Drawer>
    </>
  );
};

export default Sidebar;
