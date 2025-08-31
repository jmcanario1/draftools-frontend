import React from "react";
import Topbar from "../../components/Topbar";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Topbar />
      <main style={{ padding: "20px" }}>{children}</main>
    </>
  );
};

export default MainLayout;