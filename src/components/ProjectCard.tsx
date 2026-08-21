import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import type { projects } from "../data/projects";

type Project = (typeof projects)[number];

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  const stack = [...project.stack.frontend, ...project.stack.backend];
  const visibleStack = stack.slice(0, 6);
  const hiddenCount = stack.length - visibleStack.length;

  return (
    <motion.div custom={index} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
      <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>
        <Paper
          elevation={0}
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            borderRadius: 4,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            backgroundColor: "rgba(255,255,255,0.02)",
            transition: "border-color .25s, box-shadow .25s",
            "&:hover": {
              borderColor: "rgba(109,139,255,0.4)",
              boxShadow: "0 0 32px rgba(109,139,255,0.15)",
            },
          }}
        >
          <Box sx={{ position: "relative", aspectRatio: "16 / 10", overflow: "hidden" }}>
            <Box
              component="img"
              src={project.cover}
              alt={project.title}
              sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            {project.featured && (
              <Chip
                label="FEATURED"
                size="small"
                sx={{
                  position: "absolute",
                  top: 14,
                  left: 14,
                  backgroundColor: "rgba(5,6,10,0.75)",
                  border: "1px solid rgba(109,139,255,0.4)",
                  color: "primary.main",
                  fontWeight: 700,
                  letterSpacing: 1,
                  backdropFilter: "blur(6px)",
                }}
              />
            )}
          </Box>

          <Stack spacing={2} sx={{ p: 3, flexGrow: 1 }}>
            <Stack direction="row" spacing={1} sx={{ justifyContent: "space-between", alignItems: "flex-start" }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {project.title}
              </Typography>
              <Typography variant="caption" sx={{ color: "text.secondary", whiteSpace: "nowrap", mt: 0.5 }}>
                {project.year}
              </Typography>
            </Stack>

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {project.shortDescription}
            </Typography>

            <Stack direction="row" useFlexGap spacing={1} sx={{ flexWrap: "wrap" }}>
              {visibleStack.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  sx={{
                    backgroundColor: "rgba(109,139,255,0.1)",
                    color: "primary.main",
                    fontWeight: 600,
                  }}
                />
              ))}
              {hiddenCount > 0 && (
                <Chip
                  label={`+${hiddenCount}`}
                  size="small"
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    color: "text.secondary",
                  }}
                />
              )}
            </Stack>

            <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between", pt: 1, mt: "auto" }}>
              <Stack
                component={RouterLink}
                to={`/projects/${project.slug}`}
                direction="row"
                spacing={0.5}
                sx={{
                  alignItems: "center",
                  color: "primary.main",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                <span>View Details</span>
                <ArrowForwardIcon sx={{ fontSize: 16 }} />
              </Stack>

              <Stack direction="row" spacing={0.5}>
                {project.demoUrl && (
                  <Tooltip title="Live demo">
                    <IconButton
                      component="a"
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      size="small"
                      sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}
                    >
                      <LaunchIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                )}
                {project.repoUrl?.frontend && (
                  <Tooltip title="Frontend repo">
                    <IconButton
                      component="a"
                      href={project.repoUrl.frontend}
                      target="_blank"
                      rel="noreferrer"
                      size="small"
                      sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}
                    >
                      <GitHubIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                )}
              </Stack>
            </Stack>
          </Stack>
        </Paper>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
