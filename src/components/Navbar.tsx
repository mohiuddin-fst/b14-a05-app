import hamburger from "../ui/hamburger.png";
import logoText from "../assets/logo-text.png";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-5">
                <div className="h-16 flex items-center justify-between">
                    <button className="md:hidden text-gray-700"><img src={hamburger} alt="" /></button>
                    <div className="flex items-center gap-2 md:static absolute left-1/2 -translate-x-1/2 md:translate-x-0">
                    <img src={logoText} alt="" />
                    </div>
                    <div className="hidden md:flex items-center gap-7">
                        <a href="#home" className="text-sm font-medium text-gray-600 hover:text-pink-500">Home</a>
                        <a href="#technologies" className="text-sm font-medium text-gray-600 hover:text-pink-500">Technologies</a>
                        <a href="#projects" className="text-sm font-medium text-gray-600 hover:text-pink-500">Projects</a>
                        <a href="#about" className="text-sm font-medium text-gray-600 hover:text-pink-500">About</a>
                        <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-pink-500">Contact</a>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="text-sm font-medium text-gray-600 hover:text-pink-500">
                            Sign In
                        </button>
                        <button className="btn btn-sm rounded-full bg-gradient-to-r from-pink-500 to-purple-500 border-none text-white hover:opacity-90">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;