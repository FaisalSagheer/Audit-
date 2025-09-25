"use client";

import PillNav from "./ui/PillNav";

// import logo from '@/./vercel.svg';
// import logo from "/path/to/logo.svg";

export const Navbar = () => {

  return (
    <PillNav
      logo="logo"
      logoAlt="Company Logo"
      items={[
        { label: "Home", href: "/" },
        { label: "Work", href: "/work" },
        { label: "Services", href: "/services" },
        { label: "Culture", href: "/culture" },
        { label: "News", href: "/news" },
        { label: "Contact", href: "/contact" },
      ]}
      activeHref="/"
      className="custom-nav"
      ease="power2.easeOut"
      baseColor="#000000"
      pillColor="#ffffff"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#000000"
    />
  );
};
