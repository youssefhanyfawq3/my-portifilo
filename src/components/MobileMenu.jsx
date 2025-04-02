
export const MobileMenu = ({ menuOpen, setMenuOpen }) => {

    return(
        <div className={`fixed top-0 left-0 w-full  bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transision-all duration-300 ease-in-out ${menuOpen ? 'h-screen opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'}`}>
            <button  aria-label="Close menu" onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer" >&times;</button>
            
            <a
            onClick={() => setMenuOpen((prev) => !prev)}
              href="#home"
              className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                ${
                    menuOpen?
                    "opacity-100 translate-y-0":
                    "opacity-0 translate-y-5"
                }
                
                `}
            >
              Home
            </a>
            <a
              onClick={() => setMenuOpen(false)}
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              onClick={() => setMenuOpen(false)}
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              onClick={() => setMenuOpen(false)}
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
        </div>
        

    );
};