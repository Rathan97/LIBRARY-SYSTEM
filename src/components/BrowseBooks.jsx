import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookContainer from "./BookContainer.jsx";

function BrowseBooks() {
  const [selected, setSelected] = useState("--- Select Category ---");
  const [open, setOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState(""); // 🔹 For error message
  const navigate = useNavigate();

  const options = [
    { value: "", label: "--- Select Category ---" },
    { value: "fiction", label: "Fiction" },
    { value: "sci_fi", label: "Sci-Fi" },
    { value: "non_fiction", label: "Non - Fiction" },
  ];

  const handleSelect = (opt) => {
    setSelected(opt.label);
    setOpen(false);
    setSearchInput(""); // 🔹 Clear search when category changes
    setError(""); // Clear error
    console.log(opt.value);
    navigate(`/BrowseBooks/books/${opt.value}`);
  };

  const handleSearch = () => {
    if (!searchInput.trim()) {
      setError("Please enter a title or author to search.");
      return;
    }
    setError(""); // Clear error once valid search is made

    if (selected === "--- Select category ---") {
      navigate(`/BrowseBooks/books/?search=${searchInput}`);
    } else {
      const foundOption = options.find((o) => o.label === selected);
      navigate(`/BrowseBooks/books/${foundOption.value}?search=${searchInput}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="h-[70vh] mt-20">
      <h1 className="font-bold text-3xl text-gray-900 text-center underline">
        Browse Books
      </h1>

      {/* 🔹 Search Bar */}
      <div className="flex flex-row justify-center gap-5 border w-[500px] p-2 rounded-lg bg-white border-gray-300 m-auto mt-8 shadow-md">
        <input
          type="text"
          placeholder="Search by title or author.."
          className="border-none outline-none w-[420px]"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyDown} // 🔹 Search on Enter
        />
        <button onClick={handleSearch}>
          <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
        </button>
      </div>

      {/* 🔹 Error Message */}
      {error && (
        <p className="text-red-500 text-center mt-2 text-sm">{error}</p>
      )}

      {/* Divider */}
      <div className="flex items-center justify-center my-4 mx-[425px]">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="mx-4 font-bold text-gray-700 text-[14px]">or</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>

      {/* Dropdown */}
      <div className="relative w-[250px] mx-auto">
        <button
          onClick={() => setOpen(!open)}
          className="w-full bg-white p-2 pl-4 rounded-lg border border-gray-200 shadow-md text-left flex justify-between items-center cursor-pointer"
        >
          {selected}
          <span className="ml-2">&#9662;</span>
        </button>

        {open && (
          <ul className="absolute w-full bg-white border border-gray-200 mt-1 rounded-lg shadow-lg z-10">
            {options.map((opt) => (
              <li
                key={opt.value}
                className="p-2 pl-4 hover:bg-blue-100 cursor-pointer border-b border-gray-300"
                onClick={() => handleSelect(opt)}
              >
                {opt.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Book Results */}
      <div className="items-container ">
        <BookContainer />
      </div>
    </div>
  );
}

export default BrowseBooks;
