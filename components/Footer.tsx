import React from "react";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex items-center bg-slate-800 justify-center mt-4">
      <p className="text-white mr-2">Built By Yoosha Raza</p>
      <a
        href="https://github.com/keseho"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-white hover:text-gray-700" size={24} />
      </a>
    </div>
  );
}

export default Footer;
