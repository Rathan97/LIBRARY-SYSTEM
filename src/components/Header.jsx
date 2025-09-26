import { Link } from "react-router-dom";
import BookDetais from "./BookDetails";



function Header(){
    return (
        <div className="flex flex-row justify-around items-center gap-44 bg-neutral-900 p-4 text-white fixed top-0 w-full z-10">
            <div className="flex flex-row gap-5 font-bold">
                <img src="../src/assets/libraryicon1.png" alt="libraryicon" className="iconimg h-8 w-8"/>
                <h1 className="text-[20px]">Online Book Library</h1>
            </div>

        
          <nav className="nav-bar flex flex-row gap-8 ">
           <li>Home</li>
           <li>BrowseBooks</li>
           <li>AddBook</li>
        </nav>
        </div>
    )
}

export default Header;