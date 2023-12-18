import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const  Dropdown = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Image
        src={userImage}
        alt={title}
        onClick={toggleMenu}
      />
      <div isOpen={isOpen}>
      {links.map((link, index) => (
          <Link key={index} href={link.href}>
            <div>{link.label}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;