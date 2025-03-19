import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks}from "../consonants/index";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
        <header className=" py-2 absolute z-10 w-full bg-white">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="Nike logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-[1050px]:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

      
        {!isMenuOpen && (
          <button 
            onClick={() => setIsMenuOpen(true)} 
            className="hidden max-[1050px]:block"
          >
            <img src={hamburger} alt="menu" className="w-8 h-8" />
          </button>
        )}
      </nav>

      {isMenuOpen && (
        <div className="absolute left-0 w-full bg-white shadow-md flex flex-col items-center py-6 ">  
          <button 
            onClick={() => setIsMenuOpen(false)} 
            className="absolute top-[-10px] right-6 text-3xl"
          >
            ×
          </button>

          <ul className="flex flex-col items-center gap-4">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  className="font-montserrat text-lg text-slate-gray"
                  onClick={() => setIsMenuOpen(false)} 
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>

  
  );
};

export default Nav;