import { useState } from "react";
import { useParams, Link as RouterLink, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { projects } from "../data/projects";
import ImageLightbox from "../components/ImageLightbox";

const getEmbedUrl = (video: { src: string; provider?: string }) => {
  if (video.provider === "loom") {
    return video.src.replace("/share/", "/embed/");
  }
  return video.src;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const images = project.media.filter((item) => item.type === "image");
  const videos = project.media.filter((item) => item.type === "video");

  return (
    <Box sx={{ color: "text.primary", px: { xs: 3, md: 8 }, py: { xs: 6, md: 10 } }}>
      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Stack
            component={RouterLink}
            to="/projects"
            direction="row"
            spacing={1}
            sx={{
              alignItems: "center",
              color: "text.secondary",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.875rem",
              mb: 5,
              width: "fit-content",
              "&:hover": { color: "primary.main" },
            }}
          >
            <ArrowBackIcon sx={{ fontSize: 18 }} />
            <span>Back to Projects</span>
          </Stack>
        </motion.div>

        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show">
          <Stack direction="row" spacing={2} sx={{ alignItems: "center", flexWrap: "wrap", mb: 2 }}>
            {project.featured && (
              <Chip
                label="FEATURED"
                size="small"
                sx={{
                  backgroundColor: "rgba(109,139,255,0.12)",
                  border: "1px solid rgba(109,139,255,0.4)",
                  color: "primary.main",
                  fontWeight: 700,
                  letterSpacing: 1,
                }}
              />
            )}
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {project.role} · {project.year}
            </Typography>
          </Stack>

          <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, lineHeight: 1.15 }}>
            {project.title}
          </Typography>

          <Typography sx={{ color: "text.secondary", fontSize: "1.1rem", maxWidth: 760, mb: 4 }}>
            {project.shortDescription}
          </Typography>

          <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap" }} useFlexGap>
            {project.demoUrl && (
              <Button
                component="a"
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                variant="contained"
                endIcon={<LaunchIcon />}
                sx={{
                  background: "linear-gradient(90deg, #6d8bff, #a86dff)",
                  boxShadow: "0 0 40px rgba(109,139,255,0.25)",
                  px: 3.5,
                  "&:hover": { background: "linear-gradient(90deg, #5f7dff, #9a5cff)" },
                }}
              >
                Live Demo
              </Button>
            )}
            {project.repoUrl?.frontend && (
              <Button
                component="a"
                href={project.repoUrl.frontend}
                target="_blank"
                rel="noreferrer"
                variant="outlined"
                startIcon={<GitHubIcon />}
                sx={{
                  borderColor: "rgba(255,255,255,0.16)",
                  color: "text.primary",
                  px: 3.5,
                  "&:hover": { borderColor: "primary.main", backgroundColor: "rgba(109,139,255,0.08)" },
                }}
              >
                Frontend Repo
              </Button>
            )}
            {project.repoUrl?.backend && (
              <Button
                component="a"
                href={project.repoUrl.backend}
                target="_blank"
                rel="noreferrer"
                variant="outlined"
                startIcon={<GitHubIcon />}
                sx={{
                  borderColor: "rgba(255,255,255,0.16)",
                  color: "text.primary",
                  px: 3.5,
                  "&:hover": { borderColor: "primary.main", backgroundColor: "rgba(109,139,255,0.08)" },
                }}
              >
                Backend Repo
              </Button>
            )}
          </Stack>
        </motion.div>

        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          style={{ marginTop: 56, marginBottom: 56 }}
        >
          <Paper
            elevation={0}
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              border: "1px solid rgba(109,139,255,0.35)",
              boxShadow: "0 0 40px rgba(109,139,255,0.2)",
            }}
          >
            <Box
              component="img"
              src={project.cover}
              alt={project.title}
              sx={{ width: "100%", display: "block", aspectRatio: "16 / 9", objectFit: "cover" }}
            />
          </Paper>
        </motion.div>

        <Stack direction={{ xs: "column", md: "row" }} spacing={8}>
          <Box sx={{ flex: 2 }}>
            <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
              <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 3 }}>
                OVERVIEW
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 800, mt: 1, mb: 3 }}>
                About the project
              </Typography>
              <Typography sx={{ color: "text.secondary", lineHeight: 1.9 }}>{project.fullDescription}</Typography>
            </motion.div>

            {images.length > 0 && (
              <motion.div
                custom={3}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                style={{ marginTop: 56 }}
              >
                <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 3 }}>
                  GALLERY
                </Typography>
                <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: "1fr 1fr", mt: 2 }}>
                  {images.map((image, i) => (
                    <motion.div key={i} layoutId={`gallery-image-${image.src}`} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                      <Paper
                        onClick={() => setLightboxIndex(i)}
                        elevation={0}
                        sx={{
                          position: "relative",
                          borderRadius: 3,
                          overflow: "hidden",
                          border: "1px solid rgba(255,255,255,0.08)",
                          cursor: "zoom-in",
                          "&:hover .zoom-overlay": { opacity: 1 },
                        }}
                      >
                        <Box
                          component="img"
                          src={image.src}
                          alt={image.alt || project.title}
                          sx={{ width: "100%", display: "block", aspectRatio: "16 / 10", objectFit: "cover" }}
                        />
                        <Box
                          className="zoom-overlay"
                          sx={{
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "rgba(5,6,10,0.35)",
                            opacity: 0,
                            transition: "opacity .2s",
                          }}
                        >
                          <ZoomInIcon sx={{ color: "#fff" }} />
                        </Box>
                      </Paper>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            )}

            {videos.length > 0 && (
              <motion.div
                custom={4}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                style={{ marginTop: 56 }}
              >
                <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 3 }}>
                  WALKTHROUGH
                </Typography>
                <Stack spacing={3} sx={{ mt: 2 }}>
                  {videos.map((video, i) => (
                    <Paper
                      key={i}
                      elevation={0}
                      sx={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "16 / 9",
                        borderRadius: 3,
                        overflow: "hidden",
                        border: "1px solid rgba(255,255,255,0.08)",
                        backgroundColor: "#000",
                      }}
                    >
                      <Box
                        component="iframe"
                        src={getEmbedUrl(video)}
                        title={`${project.title} demo video`}
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                      />
                    </Paper>
                  ))}
                </Stack>
              </motion.div>
            )}
          </Box>

          <Box sx={{ flex: 1 }}>
            <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  border: "1px solid rgba(255,255,255,0.08)",
                  backgroundColor: "rgba(255,255,255,0.02)",
                  position: "sticky",
                  top: 88,
                }}
              >
                <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 3, display: "block", mb: 2 }}>
                  FRONTEND
                </Typography>
                <Stack direction="row" useFlexGap spacing={1} sx={{ flexWrap: "wrap", mb: 3 }}>
                  {project.stack.frontend.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{ backgroundColor: "rgba(109,139,255,0.1)", color: "primary.main", fontWeight: 600 }}
                    />
                  ))}
                </Stack>

                <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 3, display: "block", mb: 2 }}>
                  BACKEND
                </Typography>
                <Stack direction="row" useFlexGap spacing={1} sx={{ flexWrap: "wrap" }}>
                  {project.stack.backend.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{ backgroundColor: "rgba(255,79,216,0.1)", color: "secondary.main", fontWeight: 600 }}
                    />
                  ))}
                </Stack>
              </Paper>
            </motion.div>
          </Box>
        </Stack>
      </Box>

      <ImageLightbox
        images={images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={setLightboxIndex}
      />
    </Box>
  );
};

export default ProjectDetail;
