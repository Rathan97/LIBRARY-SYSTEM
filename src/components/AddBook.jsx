import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/LibraryDataSlice.js";
import { useNavigate } from "react-router-dom";

function AddBook() {

    const navigate = useNavigate();
  const dispatch = useDispatch();
  const BookData = useSelector((store) => store.Library.data); 

  const [formData, setFormData] = useState({
    category: "",
    title: "",
    author: "",
    rating: "",
    image: "",
    description: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields
    for (let key in formData) {
      if (!formData[key].trim()) {
        setError(`Please fill in ${key}`);
        return;
      }
    }

    setError(""); // clear previous errors

    // Auto-generate ID
    const categoryPrefix =
      formData.category === "fiction"
        ? "F"
        : formData.category === "sci_fi"
        ? "SF"
        : "NF";

    const existingBooks = BookData[formData.category] || [];
    const lastBook = existingBooks[existingBooks.length - 1];
    let lastIdNumber = 0;

    if (lastBook) {
      const match = lastBook.id.match(/\d+$/); // extract number from ID
      if (match) lastIdNumber = parseInt(match[0]);
    }

    const newId = `${categoryPrefix}${(lastIdNumber + 1)
      .toString()
      .padStart(3, "0")}`;

    const newBook = {
      id: newId,
      title: formData.title,
      author: formData.author,
      rating: parseFloat(formData.rating),
      image: formData.image,
      description: formData.description,
      category: formData.category,
    };

    // Dispatch action to Redux
    dispatch(addItem({ category: formData.category, book: newBook }));

    // Clear form
    setFormData({
      category: "",
      title: "",
      author: "",
      rating: "",
      image: "",
      description: "",
    });

        navigate(`/BrowseBooks/books/${formData.category}`);
  };

  return (
    <div className="h-[80vh] mt-26">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  border border-gray-200 w-100 p-5 rounded-lg m-auto mb-0 shadow-md bg-cyan-100"
      >
        <h1 className="font-bold text-[26px] text-center ">Add Books</h1>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className=" flex flex-col items-center justify-center gap-5">

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="input-box appearance-none tracking-wider inline-block mt-3"
        >
          <option value="">--- Select Category ---</option>
          <option value="fiction">Fiction</option>
          <option value="sci_fi">Sci-Fi</option>
          <option value="non_fiction">Non - Fiction</option>
        </select>

        <input
          type="text"
          name="title"
          value={formData.title}
          placeholder="Enter book title..."
          onChange={handleChange}
          className="input-box"
        />
        <input
          type="text"
          name="author"
          value={formData.author}
          placeholder="Enter author name..."
          onChange={handleChange}
          className="input-box"
        />
        <input
          type="number"
          name="rating"
          value={formData.rating}
          placeholder="Enter rating..."
          onChange={handleChange}
          className="input-box"
        />
        <input
          type="url"
          name="image"
          value={formData.image}
          placeholder="Enter cover image URL..."
          onChange={handleChange}
          className="input-box"
        />
        <textarea
          name="description"
          value={formData.description}
          placeholder="Enter description..."
          onChange={handleChange}
          className="input-box"
        />

        <button
          type="submit"
          className="cursor-pointer px-6 py-2 font-bold border border-gray-200 rounded-lg bg-blue-700 text-white hover:bg-blue-500 transition shadow-md hover:shadow-lg"
        >
          Add Book
        </button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
