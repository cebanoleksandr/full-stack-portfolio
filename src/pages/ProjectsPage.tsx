import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
  return (
    <Box sx={{ color: "text.primary", px: { xs: 3, md: 8 }, py: { xs: 6, md: 10 } }}>
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 3 }}>
            PORTFOLIO
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 2 }}>
            Projects.
          </Typography>
          <Typography sx={{ color: "text.secondary", maxWidth: 640, mb: 8 }}>
            A selection of full-stack apps I've built end-to-end — from REST APIs and databases to
            responsive, animated interfaces.
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "grid",
            gap: 4,
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" },
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectsPage;
