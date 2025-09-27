import { useState, useRef } from "react";
import BookCard from "./BookCard";
import BookData from "../utils/BookData.js";

function HomePage() {
  const scrollTargetRef = useRef(null);

  // Scroll down to book categories section
  const handleScrollDown = () => {
    scrollTargetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [category, setCategory] = useState("fiction"); // Selected book category

  return (
    <div>
      {/* Hero Section with background image and welcome text */}
      <div className="relative text-center h-screen w-full">
        <img
          src="../src/assets/librarybg.jpg"
          alt="background-image"
          className="h-full w-full object-cover brightness-50"
        />

        {/* Welcome message */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-5xl font-bold drop-shadow-lg text-center">
            Welcome to the Online Library
          </h1>
          <p className="text-lg mt-4 drop-shadow-md">
            Dive into a world of stories from our wide-ranging collection.
          </p>
        </div>

        {/* Scroll Down Button */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <button
            onClick={handleScrollDown}
            className="text-white p-3 pt-1 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce"
            aria-label="Scroll Down"
          >
            <i className="fa-solid fa-angles-down"></i>
          </button>
        </div>
      </div>

      {/* Target Section to scroll to */}
      <div ref={scrollTargetRef} className="bg-gray-100">
        <section className="h-[85vh] mt-8">
          {/* Section Title with Divider */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="mx-4 font-bold text-gray-700 text-[26px]">
              Book Categories
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-row justify-center items-center gap-15 font-bold tracking-wider text-gray-700">
            <button onClick={() => setCategory("fiction")} className="cursor-pointer px-2.5 py-2 border border-gray-200 rounded-lg bg-white hover:bg-gray-200 transition shadow-sm hover:shadow-md">
              Fictional
            </button>
            <button onClick={() => setCategory("non_fiction")} className="cursor-pointer px-2.5 py-2 border border-gray-200 rounded-lg bg-white hover:bg-gray-200 transition shadow-sm hover:shadow-md">
              Non - Fictional
            </button>
            <button onClick={() => setCategory("sci_fi")} className="cursor-pointer px-2.5 py-2 border border-gray-200 rounded-lg bg-white hover:bg-gray-200 transition shadow-sm hover:shadow-md">
              Sci-Fi
            </button>
          </div>

          {/* Popular Books Display */}
          <div className="Items-Container h-[80%] mx-15 mb-5">
            <h2 className="font-bold text-[22px] text-gray-900 mb-5 mx-9">
              Popular Books:
            </h2>
            <div className="flex flex-row gap-0">
              {/* Map and render top 5 books in selected category */}
              {BookData[category].slice(0, 5).map((book) => (
                <BookCard key={book.id} data={book} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
