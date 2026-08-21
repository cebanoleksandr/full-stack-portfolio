import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const ProjectsLayout = () => {
  return (
    <>
      <Header title="Projects" />
      <Outlet />
    </>
  );
};

export default ProjectsLayout;
