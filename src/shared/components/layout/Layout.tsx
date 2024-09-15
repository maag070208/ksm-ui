import React from "react";
import { useNavigate } from "react-router-dom";

export interface LayoutProps {
  title: string;
  backPath?: string;
  children: React.ReactNode;
}

const Layout = ({ children, ...props }: LayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="grid">
      <div className="h-25rem col-12 md:col-3 bg-black-alpha-30">
        <button
          onClick={() => {
            navigate("/home");
          }}
        >
          navigate to home
        </button>
        <button
          onClick={() => {
            navigate("/auth");
          }}
        >
          navigate to auth
        </button>
      </div>
      <div className="h-25rem col-12 md:col-9 bg-black-alpha-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;
