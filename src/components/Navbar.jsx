import logo from "/src/assets/logo.png";
import close from "/src/assets/close.svg";
import menu from "/src/assets/menu.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          if (scrollTop > 100) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    return (
        <nav className={`w-full flex items-center pt-2 fixed top-0 z-20 ${
            scrolled ? "bg-white" : "bg-white"
          }`}>
            <div className="w-full flex justify-around items-center max-w-7xl box-border m-auto
            ">
                <Link to="/" className=" "
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}>
                    <img src={logo} className='w-28 object-contain' />
                </Link>
                <ul className='list-none hidden md:flex flex-row gap-10'>
                    {navLinks.map((nav) => (
                    <li
                    key={nav.id}
                    className={`${
                        active === nav.title ? "text-[#12232a]" : "text-[#05668D]"
                    } hover:text-black text-[18px] font-medium cursor-pointer`}
                    onClick={() => setActive(nav.title)}
                    >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
                
                </ul>

            <div className='md:hidden flex flex-1 justify-end items-center'>
            <img
                src={toggle ? close : menu}
                alt='menu'
                className='w-[28px] h-[28px] object-contain fill-[#05668D] mr-8'
                onClick={() => setToggle(!toggle)}
            />

          <div
                className={`${
                !toggle ? "hidden" : "flex"
                } p-6 our-color-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
                <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navLinks.map((nav) => (
                    <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                        active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                        setToggle(!toggle);
                        setActive(nav.title);
                    }}
                    >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
                </ul>
            </div>
            </div>
                <button className="hidden md:flex bg-[#05668D] rounded-2xl font-semibold py-1 px-8 text-white">Contact Us</button>
            </div>
        </nav>
    )
}

export default Navbar;