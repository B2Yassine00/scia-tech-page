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
            <div className="w-full flex justify-around items-center max-w-7xl box-border m-auto">
                <Link to="/" className=" "
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}>
                    <img src="/src/assets/logo.png" className='w-28 object-contain' />
                </Link>
                <ul className='list-none hidden md:flex flex-row gap-10'>
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${
                                active === nav.title ? "text-[#12232a]" : ""
                            } hover:text-black text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`} style={{ color: "#05668D" }}>{nav.title}</a>
                        </li>
                    ))}
                </ul>    
            <div className='md:hidden flex flex-1 justify-end items-center'>
            <img
                src={toggle ? "/src/assets/close.svg" : "/src/assets/menu.svg"}
                alt='menu'
                className='w-[28px] h-[28px] object-contain fill-[#05668D] mr-8'
                onClick={() => setToggle(!toggle)}
            />

          <div
                className={`${
                !toggle ? "hidden" : "flex"
                } p-6 our-color-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-2'>
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`font-poppins font-medium cursor-pointer text-[16px] ${
                                active === nav.title ? "text-white" : "text-white"
                            }`}
                            onClick={() => {
                                setToggle(!toggle);
                                setActive(nav.title);
                            }}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                    {/* Adding the "Contact" menu item */}
                    <li
                        className={`font-poppins font-medium cursor-pointer text-[16px] ${
                            active === "Contact" ? "text-white" : "text-white"
                        }`}
                        onClick={() => {
                            setToggle(!toggle);
                            setActive("Contact");
                        }}
                    >
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            </div>
            <button className="hidden md:flex bg-[#05668D] rounded-3xl font-semibold py-1 px-8 text-white">
                <a href="#contact" className="text-white">
                    Contact Us
                </a>
            </button>

            </div>
        </nav>
    )
}

export default Navbar;