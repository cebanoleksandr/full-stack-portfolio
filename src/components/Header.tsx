import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

export interface HeaderLink {
  label: string;
  href: string;
}

interface HeaderProps {
  links?: HeaderLink[];
  title?: string;
}

const Header = ({ links, title }: HeaderProps) => {
  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: title ? "flex-start" : "center",
        pl: { xs: 8, md: 8 },
        pr: { xs: 3, md: 8 },
        py: 2,
        backgroundColor: "rgba(5,6,10,0.7)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      {title && (
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
      )}

      {links && links.length > 0 && (
        <Stack direction="row" spacing={{ xs: 2, sm: 4 }} sx={{ flexWrap: "wrap", justifyContent: "center" }}>
          {links.map(({ label, href }) => (
            <Box
              key={label}
              component="button"
              onClick={() => {
                document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
              }}
              sx={{ background: "none", border: 0, p: 0, cursor: "pointer", font: "inherit" }}
            >
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 600,
                    letterSpacing: 0.5,
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {label.toUpperCase()}
                </Typography>
              </motion.div>
            </Box>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default Header;
