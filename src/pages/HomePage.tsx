import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { Link as RouterLink } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CodeIcon from "@mui/icons-material/Code";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";
import TranslateIcon from "@mui/icons-material/Translate";
import avatarPlaceholder from "../assets/avatar.jpg";
import { profile } from "../data/profile";
import { skills } from "../data/skills";
import { experience, education, additionalEducation } from "../data/experience";
import AnimatedSection from "../components/AnimatedSection";
import SkillGroup from "../components/SkillGroup";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const contactLinks = [
  { icon: EmailIcon, label: profile.contacts.email, href: `mailto:${profile.contacts.email}` },
  { icon: PhoneIcon, label: profile.contacts.phone, href: `tel:${profile.contacts.phone.replace(/\s+/g, "")}` },
  { icon: SendIcon, label: "Telegram", href: profile.contacts.telegram },
  { icon: LinkedInIcon, label: "LinkedIn", href: profile.contacts.linkedin },
  { icon: GitHubIcon, label: "GitHub", href: profile.contacts.github },
];

const stats = [
  { icon: CodeIcon, value: "2+", label: "Years of commercial experience" },
  { icon: EmojiEventsIcon, value: "800+", label: "Algorithmic tasks solved" },
  { icon: GroupsIcon, value: "200", label: "Public speaking audience" },
  { icon: TranslateIcon, value: `${skills.languages.length}`, label: "Languages spoken" },
];

const glow = "0 0 40px rgba(109,139,255,0.25)";

const HomePage = () => {
  return (
    <Box sx={{ color: "text.primary" }}>
      {/* Hero */}
      <Box
        id="hero"
        sx={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          px: { xs: 3, md: 8 },
          py: 10,
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

        <Chip
          label="AVAILABLE FOR WORK"
          icon={<Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#4ade80", ml: 1 }} />}
          sx={{
            position: "absolute",
            top: 32,
            right: { xs: 24, md: 48 },
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "text.secondary",
            fontWeight: 600,
            letterSpacing: 1,
          }}
        />

        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={8}
          sx={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 1200, mx: "auto", alignItems: "center",}}
        >
          <Box sx={{ flex: 1 }}>
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Stack direction="row" spacing={1.5} sx={{ mb: 3, alignItems: "center",}}>
                <Box sx={{ width: 32, height: 1, backgroundColor: "primary.main" }} />
                <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 3 }}>
                  {profile.role}
                </Typography>
              </Stack>
            </motion.div>

            <Typography
              component="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2.6rem", sm: "3.6rem", md: "4.5rem" },
                lineHeight: 1.05,
                mb: 3,
              }}
            >
              {profile.name.split(" ").map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: "easeOut" }}
                  style={{
                    display: "block",
                    background: i % 2 === 0 ? "linear-gradient(90deg, #f1f2f8, #b7c0ff)" : "linear-gradient(90deg, #6d8bff, #ff4fd8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {word}.
                </motion.span>
              ))}
            </Typography>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Typography sx={{ color: "text.secondary", fontSize: "1.15rem", maxWidth: 520, mb: 4 }}>
                {profile.heroTagline}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <Stack direction="row" spacing={1} sx={{ color: "text.secondary", mb: 5, alignItems: "center",}}>
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2">
                  {profile.location} · {profile.availability}
                </Typography>
              </Stack>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: "wrap" }}>
                <Button
                  component={RouterLink}
                  to="/projects"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    background: "linear-gradient(90deg, #6d8bff, #a86dff)",
                    boxShadow: glow,
                    px: 3.5,
                    "&:hover": { background: "linear-gradient(90deg, #5f7dff, #9a5cff)" },
                  }}
                >
                  View Work
                </Button>
                <Button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: "rgba(255,255,255,0.16)",
                    color: "text.primary",
                    px: 3.5,
                    "&:hover": { borderColor: "primary.main", backgroundColor: "rgba(109,139,255,0.08)" },
                  }}
                >
                  Get in Touch
                </Button>
              </Stack>
            </motion.div>
          </Box>

          <Box sx={{ flex: 1, display: "flex", justifyContent: "center", width: "100%" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ position: "relative", width: "100%", maxWidth: 380 }}
            >
              <Paper
                elevation={0}
                sx={{
                  position: "relative",
                  aspectRatio: "4 / 5",
                  borderRadius: 4,
                  border: "1px solid rgba(109,139,255,0.35)",
                  backgroundColor: "rgba(255,255,255,0.02)",
                  boxShadow: glow,
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={avatarPlaceholder}
                  alt={profile.name}
                  sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </Paper>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                style={{ position: "absolute", bottom: -20, right: -20 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    px: 2.5,
                    py: 1.5,
                    borderRadius: 3,
                    border: "1px solid rgba(255,255,255,0.1)",
                    backgroundColor: "rgba(11,13,22,0.9)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <Typography sx={{ fontWeight: 800, color: "primary.main" }}>2+ Years</Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary" }}>
                    Experience
                  </Typography>
                </Paper>
              </motion.div>
            </motion.div>
          </Box>
        </Stack>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ opacity: { delay: 1 }, y: { duration: 1.6, repeat: Infinity, ease: "easeInOut" } }}
          style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)" }}
        >
          <Stack spacing={1} sx={{ color: "text.secondary", alignItems: "center",}}>
            <Typography variant="caption" sx={{ letterSpacing: 2 }}>
              SCROLL
            </Typography>
            <ArrowDownwardIcon fontSize="small" />
          </Stack>
        </motion.div>
      </Box>

      {/* About */}
      <AnimatedSection className="" delay={0}>
        <Box id="about" sx={{ px: { xs: 3, md: 8 }, py: 14 }}>
          <Box sx={{ maxWidth: 1100, mx: "auto" }}>
            <Stack direction={{ xs: "column", md: "row" }} spacing={8}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 3 }}>
                  WHO I AM
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 3, lineHeight: 1.2 }}>
                  Full Stack{" "}
                  <Box component="span" sx={{ color: "primary.main" }}>
                    Developer.
                  </Box>
                </Typography>
                <Typography sx={{ color: "text.secondary", fontSize: "1.05rem", lineHeight: 1.8, mb: 3 }}>
                  {profile.summary}
                </Typography>
                <Stack spacing={1.5}>
                  {profile.highlights.map((highlight) => (
                    <Stack key={highlight} direction="row" spacing={1.5} sx={{ alignItems: "flex-start" }}>
                      <Box sx={{ mt: 1, width: 6, height: 6, borderRadius: "50%", backgroundColor: "secondary.main", flexShrink: 0 }} />
                      <Typography sx={{ color: "text.secondary" }}>{highlight}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>

              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      custom={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          p: 3,
                          height: "100%",
                          borderRadius: 3,
                          border: "1px solid rgba(255,255,255,0.08)",
                          backgroundColor: "rgba(255,255,255,0.02)",
                          transition: "border-color .2s, transform .2s",
                          "&:hover": { borderColor: "primary.main", transform: "translateY(-4px)" },
                        }}
                      >
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: 2,
                            backgroundColor: "rgba(109,139,255,0.12)",
                            color: "primary.main",
                          }}
                        >
                          <stat.icon fontSize="small" />
                        </Box>
                        <Typography variant="h5" sx={{ fontWeight: 800 }}>
                          {stat.value}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                          {stat.label}
                        </Typography>
                      </Paper>
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
      </AnimatedSection>

      {/* Skills */}
      <Box id="skills" sx={{ backgroundColor: "background.paper", px: { xs: 3, md: 8 }, py: 14 }}>
        <AnimatedSection className="">
          <Box sx={{ maxWidth: 1000, mx: "auto" }}>
            <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 3 }}>
              WHAT I USE
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 6 }}>
              Skills.
            </Typography>
            <Box sx={{ display: "grid", gap: 6, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" } }}>
              <SkillGroup title="Frontend" items={skills.frontend} />
              <SkillGroup title="Backend" items={skills.backend} />
              <SkillGroup title="Tools & Practices" items={skills.toolsAndPractices} />
              <SkillGroup title="Languages" items={skills.languages.map((l) => `${l.name} — ${l.level}`)} />
            </Box>
          </Box>
        </AnimatedSection>
      </Box>

      {/* Experience */}
      <AnimatedSection className="">
        <Box id="experience" sx={{ px: { xs: 3, md: 8 }, py: 14 }}>
          <Box sx={{ maxWidth: 900, mx: "auto" }}>
            <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 3 }}>
              CAREER
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 6 }}>
              Experience.
            </Typography>

            <Stack spacing={6} sx={{ position: "relative", borderLeft: "1px solid rgba(255,255,255,0.1)", pl: 5 }}>
              {experience.map((job, i) => (
                <motion.div
                  key={`${job.company}-${job.period}`}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  style={{ position: "relative" }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 6,
                      left: -45,
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: "primary.main",
                      boxShadow: "0 0 0 4px rgba(109,139,255,0.15)",
                    }}
                  />
                  <Stack direction="row" spacing={1} sx={{ alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap",}}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {job.role} · {job.company}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "primary.main", fontWeight: 600 }}>
                      {job.period}
                    </Typography>
                  </Stack>
                  <Typography sx={{ color: "text.secondary", mt: 1 }}>{job.description}</Typography>

                  {job.responsibilities && (
                    <Stack spacing={0.75} sx={{ mt: 2 }}>
                      {job.responsibilities.map((item) => (
                        <Typography key={item} variant="body2" sx={{ color: "text.secondary", pl: 2, position: "relative" }}>
                          <Box component="span" sx={{ position: "absolute", left: 0 }}>
                            —
                          </Box>
                          {item}
                        </Typography>
                      ))}
                    </Stack>
                  )}

                  {job.projects && (
                    <Stack spacing={0.75} sx={{ mt: 2 }}>
                      {job.projects.map((item) => (
                        <Typography key={item} variant="body2" sx={{ color: "text.secondary", pl: 2, position: "relative" }}>
                          <Box component="span" sx={{ position: "absolute", left: 0 }}>
                            —
                          </Box>
                          {item}
                        </Typography>
                      ))}
                    </Stack>
                  )}

                  {job.stack && (
                    <Stack direction="row" useFlexGap spacing={1} sx={{ mt: 2, flexWrap: "wrap",}}>
                      {job.stack.map((tech) => (
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
                    </Stack>
                  )}
                </motion.div>
              ))}
            </Stack>
          </Box>
        </Box>
      </AnimatedSection>

      {/* Education */}
      <Box sx={{ backgroundColor: "background.paper", px: { xs: 3, md: 8 }, py: 14 }}>
        <AnimatedSection className="">
          <Box sx={{ maxWidth: 900, mx: "auto" }}>
            <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 3 }}>
              BACKGROUND
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 6 }}>
              Education.
            </Typography>

            <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" } }}>
              {education.map((edu, i) => (
                <motion.div key={`${edu.institution}-${i}`} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2.5,
                      borderRadius: 3,
                      border: "1px solid rgba(255,255,255,0.08)",
                      backgroundColor: "rgba(255,255,255,0.02)",
                      display: "flex",
                      gap: 1.5,
                    }}
                  >
                    <SchoolOutlinedIcon sx={{ color: "primary.main", mt: 0.5 }} fontSize="small" />
                    <Box>
                      <Typography sx={{ fontWeight: 700 }}>{edu.institution}</Typography>
                      {edu.program && (
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                          {edu.program}
                        </Typography>
                      )}
                      {edu.period && (
                        <Typography variant="caption" sx={{ color: "text.secondary" }}>
                          {edu.period}
                        </Typography>
                      )}
                    </Box>
                  </Paper>
                </motion.div>
              ))}
            </Box>

            <Box sx={{ mt: 6 }}>
              <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 3, display: "block", mb: 2 }}>
                ADDITIONAL COURSES
              </Typography>
              <Stack direction="row" useFlexGap spacing={1} sx={{ flexWrap: "wrap" }}>
                {additionalEducation.map((course) => (
                  <Chip
                    key={course}
                    label={course}
                    size="small"
                    sx={{
                      backgroundColor: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "text.secondary",
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Box>
        </AnimatedSection>
      </Box>

      {/* Contact */}
      <AnimatedSection className="">
        <Box id="contact" sx={{ px: { xs: 3, md: 8 }, py: 16, textAlign: "center" }}>
          <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 3 }}>
            GET IN TOUCH
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 2 }}>
            Let's build something great.
          </Typography>
          <Typography sx={{ color: "text.secondary", maxWidth: 560, mx: "auto", mb: 5 }}>
            {profile.availability} · {profile.location}
          </Typography>
          <Stack direction="row" spacing={2} useFlexGap sx={{ justifyContent: "center", flexWrap: "wrap",}}>
            {contactLinks.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{ textDecoration: "none" }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    px: 2.5,
                    py: 1.2,
                    borderRadius: 10,
                    border: "1px solid rgba(255,255,255,0.1)",
                    backgroundColor: "rgba(255,255,255,0.02)",
                    color: "text.primary",
                    fontSize: "0.9rem",
                    "&:hover": { borderColor: "primary.main" },
                  }}
                >
                  <Icon fontSize="small" sx={{ color: "primary.main" }} />
                  {label}
                </Paper>
              </motion.a>
            ))}
          </Stack>
        </Box>
      </AnimatedSection>
    </Box>
  );
};

export default HomePage;
