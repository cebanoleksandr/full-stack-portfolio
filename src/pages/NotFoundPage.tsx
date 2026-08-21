import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const glow = "0 0 40px rgba(109,139,255,0.25)";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "text.primary",
        px: { xs: 3, md: 8 },
        py: 10,
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background:
            "radial-gradient(60rem 40rem at 80% 10%, rgba(109,139,255,0.16), transparent 60%), radial-gradient(40rem 30rem at 10% 90%, rgba(255,79,216,0.12), transparent 60%)",
        }}
      />

      <Stack spacing={3} sx={{ position: "relative", zIndex: 1, alignItems: "center", maxWidth: 560 }}>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 3 }}>
            LOST IN SPACE
          </Typography>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}>
          <Typography
            component="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "4.5rem", sm: "6rem", md: "7rem" },
              lineHeight: 1,
              background: "linear-gradient(90deg, #6d8bff, #ff4fd8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            404.
          </Typography>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
          <Typography sx={{ color: "text.secondary", fontSize: "1.05rem" }}>
            The page you're looking for doesn't exist or has been moved.
          </Typography>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
          <Button
            component={RouterLink}
            to="/"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              background: "linear-gradient(90deg, #6d8bff, #a86dff)",
              boxShadow: glow,
              px: 3.5,
              mt: 1,
              "&:hover": { background: "linear-gradient(90deg, #5f7dff, #9a5cff)" },
            }}
          >
            Back to Home
          </Button>
        </motion.div>
      </Stack>
    </Box>
  );
};

export default NotFoundPage;
