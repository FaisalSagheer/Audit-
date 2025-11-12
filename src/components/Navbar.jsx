"use client";

import PillNav from "./ui/PillNav";
<<<<<<< HEAD

// import logo from '@/./vercel.svg';
import Logo from "../../public/vercel.svg";
=======
import Logo from "../../public/lorem.svg";
>>>>>>> 1a01db660e26002b6c5d085a5a8104187616a24d

export const Navbar = () => {

  return (
    <PillNav
      logo={Logo}
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
