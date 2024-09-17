import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "primereact/menu";
export interface LayoutProps {
  title: string;
  backPath?: string;
  children: React.ReactNode;
}

const Layout = ({ children, ...props }: LayoutProps) => {
  
  const navigate = useNavigate();

  const menuItems = [
    {
      label: 'Inicio',
      icon: 'pi pi-home',
        command: () => navigate('/home')
  },
    {
      label: 'Reportes',
      icon: 'pi pi-folder',
        command: () => {
          navigate('/reports');
        }
    }

  ]

  return (
    <div className="grid">
      {/* THIS IS THE SIDEBAR */}
      <div className="h-screen col-12 md:col-3 bg-black-alpha-30">
       
       <Menu model={menuItems}/>
      </div>
      {/* THIS IS THE CONTENT BODY */}
      <div className="h-screen col-12 md:col-9 bg-black-alpha-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;
