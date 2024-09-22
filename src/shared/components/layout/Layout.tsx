import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "primereact/menu";
import { Card } from "primereact/card";

export interface LayoutProps {
  title: string;
  backPath?: string;
  children: React.ReactNode;
}

const Layout = ({ children, ...props }: LayoutProps) => {
  const navigate = useNavigate();

  const menuItems = [
    {
      label: "Inicio",
      icon: "pi pi-home",
      command: () => navigate("/home"),
    },
    {
      label: "Reportes",
      icon: "pi pi-folder",
      command: () => {
        navigate("/reports");
      },
    },
  ];

  return (
    // LAYOUT //
    <div className="grid bg-red-300">
      {/* THIS IS THE SIDEBAR */}
      <div className="flex-column hidden md:flex col-3 lg:col-2 bg-gray-50 h-screen">
        <Menu className="border-none bg-gray-50 w-auto" model={menuItems} />
      </div>
      {/* THIS IS THE CONTENT BODY */}
      <div className="col-12 md:col-9 lg:col-10 bg-white h-screen overflow-auto">
        <div className="flex flex-column w-full">
          <Card className="flex justify-content-start align-items-center h-4rem border-noround shadow-none  lg:text-3xl md:text-2xl p-0 m-0">{props.title}</Card>
           <div className="p-1">{children}
           </div> 
        </div>
      </div>
    </div>
  );
};

export default Layout;
