import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

interface SkillGroupProps {
  title: string;
  items: string[];
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04 },
  },
};

const pill = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const SkillGroup = ({ title, items }: SkillGroupProps) => {
  return (
    <Box>
      <Typography
        variant="overline"
        sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 2, display: "block", mb: 2 }}
      >
        {title}
      </Typography>
      <motion.div
        style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {items.map((item) => (
          <motion.div key={item} variants={pill} transition={{ duration: 0.35 }} whileHover={{ scale: 1.06, y: -2 }}>
            <Chip
              label={item}
              size="small"
              sx={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "text.secondary",
                fontWeight: 500,
                "&:hover": {
                  borderColor: "primary.main",
                  color: "text.primary",
                },
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </Box>
  );
};

export default SkillGroup;
