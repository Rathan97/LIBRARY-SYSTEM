import { Link } from "react-router-dom";

function Header() {
    return (
        // Header container: fixed at top, flex layout
        <div className="flex flex-row justify-around items-center gap-44 bg-neutral-900 p-4 text-white fixed top-0 w-full z-10">
            
            {/* Logo and title */}
            <Link to="/">
                <div className="flex flex-row gap-5 font-bold">
                    <img 
                        src="../src/assets/libraryicon1.png" 
                        alt="libraryicon" 
                        className="iconimg h-8 w-8"
                    />
                    <h1 className="text-[20px]">Online Book Library</h1>
                </div>
            </Link>

            {/* Navigation links */}
            <nav className="nav-bar flex flex-row gap-8">
                <Link to="/">Home</Link>
                <Link to="/BrowseBooks">BrowseBooks</Link>
                <Link to="/AddBook">AddBooks</Link>
            </nav>
        </div>
    )
}

export default Header;
