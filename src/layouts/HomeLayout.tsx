import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const anchorLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const HomeLayout = () => {
  return (
    <>
      <Header links={anchorLinks} />
      <Outlet />
    </>
  );
};

export default HomeLayout;
