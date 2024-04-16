import React from "react";
import Header from "./header";
import Footer from "./footer";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <div className="pt-0 lg:pt-5 h-[90%] my-10">
        {/* body */}
        {children}
        {/* End body */}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
