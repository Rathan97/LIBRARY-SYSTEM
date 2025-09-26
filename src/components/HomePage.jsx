import {Link} from "react-router-dom";
import BookCard from "./BookCard";

function HomePage(){

    return (
        <div>
        <div className="relative text-center">
        <img src="../src/assets/librarybg.jpg" alt="baground-image" className="bgimg h-[100vh] w-[100vw] object-cover brightness-40 "/>
        
        <div className="absolute  top-50 left-95 text-center  text-white" >
            <h1 className="text-5xl">Welcome to the Online Library.</h1>
            <p className="text-[18px] mt-1">Dive into a world of stories from our wide-ranging collection. </p>
        </div>
        </div>

        <section className="h-[85vh] mt-10">
      <div className="flex items-center justify-center  mb-8">
  <div className="flex-grow border-t border-gray-400"></div>
  <span className="mx-4  font-bold text-gray-700 text-[26px]">Book Categories</span>
  <div className="flex-grow border-t border-gray-400"></div>
</div>  

        <div className="flex flex-row justify-center items-center gap-15 font-bold  tracking-wider text-gray-700">
            <button className="cursor-pointer  px-2.5 py-2 border border-gray-200 rounded-lg bg-white hover:bg-gray-200   transition shadow-sm hover:shadow-md ">Fictional</button>
            <button className="cursor-pointer  px-2.5 py-2 border border-gray-200 rounded-lg bg-white hover:bg-gray-200 transition shadow-sm hover:shadow-md">Non - Fictional</button>
            <button className="cursor-pointer  px-2.5 py-2 border border-gray-200 rounded-lg bg-white hover:bg-gray-200 transition shadow-sm hover:shadow-md">Sci-Fi</button>
           
        </div>


        <div className="Items-Container  h-[80%] mx-15 mb-5">
            <h2 className="font-bold text-[22px] text-gray-900 mb-5 mx-9">Popular Books : </h2>
            <BookCard />
        </div>
         </section>




        </div>
       
        
    )
}

export default HomePage;