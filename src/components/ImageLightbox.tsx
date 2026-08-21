import { useEffect } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { AnimatePresence, motion } from "framer-motion";

interface ImageLightboxProps {
  images: { src: string; alt?: string }[];
  index: number | null;
  onClose: () => void;
  onChangeIndex: (index: number) => void;
}

const ImageLightbox = ({ images, index, onClose, onChangeIndex }: ImageLightboxProps) => {
  const isOpen = index !== null;
  const current = index !== null ? images[index] : null;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && index !== null) onChangeIndex((index + 1) % images.length);
      if (e.key === "ArrowLeft" && index !== null) onChangeIndex((index - 1 + images.length) % images.length);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, index, images.length, onClose, onChangeIndex]);

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(5,6,10,0.92)",
            backdropFilter: "blur(6px)",
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: { xs: 16, md: 32 },
              right: { xs: 16, md: 32 },
              color: "text.primary",
              backgroundColor: "rgba(255,255,255,0.06)",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.12)" },
            }}
          >
            <CloseIcon />
          </IconButton>

          {images.length > 1 && (
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                onChangeIndex((index! - 1 + images.length) % images.length);
              }}
              sx={{
                position: "absolute",
                left: { xs: 8, md: 32 },
                color: "text.primary",
                backgroundColor: "rgba(255,255,255,0.06)",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.12)" },
              }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>
          )}

          {images.length > 1 && (
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                onChangeIndex((index! + 1) % images.length);
              }}
              sx={{
                position: "absolute",
                right: { xs: 8, md: 32 },
                color: "text.primary",
                backgroundColor: "rgba(255,255,255,0.06)",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.12)" },
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          )}

          <motion.div
            key={current.src}
            layoutId={`gallery-image-${current.src}`}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ maxWidth: "90vw", maxHeight: "85vh" }}
          >
            <Box
              component="img"
              src={current.src}
              alt={current.alt || ""}
              sx={{
                maxWidth: "90vw",
                maxHeight: "85vh",
                display: "block",
                borderRadius: 2,
                boxShadow: "0 0 60px rgba(109,139,255,0.2)",
              }}
            />
          </motion.div>

          {images.length > 1 && (
            <Typography
              variant="body2"
              sx={{
                position: "absolute",
                bottom: { xs: 16, md: 32 },
                color: "text.secondary",
                letterSpacing: 1,
              }}
            >
              {index! + 1} / {images.length}
            </Typography>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageLightbox;
